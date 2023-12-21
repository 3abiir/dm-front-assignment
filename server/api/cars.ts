import { defineEventHandler, createError } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch('https://dm-assignment-commonshare.koyeb.app/api/cars');
    return response;
  } catch (error) {
    if (error instanceof Error) {
      // If the error is an instance of Error, handle accordingly
      return createError({
        statusCode: 500,
        statusMessage: error.message,
      });
    } else {
      // If the error is not an instance of Error, handle as a generic server error
      return createError({
        statusCode: 500,
        statusMessage: 'Unknown server error while fetching data',
      });
    }
  }
});
