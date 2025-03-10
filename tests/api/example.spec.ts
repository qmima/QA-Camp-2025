import test, { expect } from '@playwright/test';

const bookingData = {
  firstname: 'Anna',
  lastname: 'Kowalska',
  totalprice: 120,
  depositpaid: true,
  bookingdates: {
    checkin: '2024-12-12',
    checkout: '2024-12-15',
  },
  additionalneeds: 'Breakfast',
};

test('new booking can be created and booking ID shouldnt be empty', async ({ request }) => {
  // given: request to create booking is sent
  const newBooking = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: bookingData,
  });

  // then: request is successful
  expect(newBooking.ok()).toBeTruthy();
  expect(newBooking.status()).toEqual(200);

  // then: check if booking ID is not null
  const responseBody = await newBooking.json();
  const bookingId = responseBody.bookingid;
  console.log(bookingId);

  expect(bookingId).not.toBe(null);

  // then: check if received booking data is correct
  const receivedBookingData = responseBody.booking;
  expect(receivedBookingData).toEqual(bookingData);
});
