import React from 'react'

const HeroHeader = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Live Price
              <br class="hidden lg:inline-block" />
              All Coins Exchanges Avaiable Here
            </h1>
            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              consectetur explicabo alias eaque nostrum maxime minima vero cum
              aliquam quis magni non quaerat perferendis reiciendis illum, quas
              distinctio labore asperiores sapiente? Mollitia repellendus ut,
              neque dolor, sapiente laboriosam fugit maiores praesentium
              officiis nesciunt atque cumque velit aliquid consequatur eveniet
              quod cum voluptates autem animi repellat optio qui tenetur. Nobis
              quia modi beatae tenetur, veniam perferendis quaerat fugiat
              laborum ipsa ut aliquam dolor rerum atque veritatis illo repellat
              itaque voluptates autem odit numquam vero. Voluptatum cum error
              quibusdam. Sapiente repellendus rerum voluptas. Nulla laudantium
              amet praesentium exercitationem, doloribus ipsam neque laboriosam?
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Live Data
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-orange-100 border-0 py-2 px-6 focus:outline-none hover:bg-orange-200 rounded text-lg">
                Exchanges
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHeader   