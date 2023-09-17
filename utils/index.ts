export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'd2584fa2a0msh8d2572d26d0e610p1c2326jsn09f26537112d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base rental price per day in dollars
  const mileageFactor = 0.1; // additional rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehicle age

  //calculate additional rate of mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
