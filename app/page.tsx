import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import { fetchCars } from '@/utils';
import CarCard from '@/components/CarCard';
import { fuels, yearsOfProduction } from '@/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShowMore from '@/components/ShowMore';

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    fuel: searchParams.fuel || '',
    year: searchParams.year || 2022,
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <>
      <Navbar />
      <main className='overflow-hidden'>
        <Hero />

        <div
          className='mt-12 padding-x padding-y max-width'
          id='discover'>
          <div className='home__text-container'>
            <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
            <p>Explore the cars you find intresting</p>
          </div>
          <div className='home__filters'>
            <SearchBar />
            <div className='home__filter-container'>
              <CustomFilter
                title='fuel'
                options={fuels}
              />
              <CustomFilter
                title='year'
                options={yearsOfProduction}
              />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no Result</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
