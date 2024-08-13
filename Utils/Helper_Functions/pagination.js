// Simple function to handle pagination calucations, returns calculated skip and limit values

export default function pagination(page, limit) {
  // Handles Pagination Calculations for GET requests
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  const skip = (pageNumber - 1) * limitNumber;

  return {
    skip: skip,
    limit: limitNumber
  }
}
