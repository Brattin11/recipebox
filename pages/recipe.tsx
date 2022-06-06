import Image from "next/image"

const Recipe = () => {
  return (
    <div className="w-full h-screen bg-stone-100">
    
      <div className="flex flex-row">
        <div className="px-2 py-3">Home</div>
        <div className="px-2 py-3">Recipes</div>
      </div>
    <div className="w-full h-full flex flex-row justify-center content-center bg-stone-100">
      <div className="w-2/3">
        <div className="w-full flex flex-row justify-center content-center mb-12 mt-12">
          <div>Vegetable Curry</div>
        </div>
        <div className = "w-full flex flex-row justify-center content-center">
          <div className="w-1/2">
            
              <ul>
                <li>
                  8 ounces rice noodles
                </li>
                <li>
                  2 tablespoons coconut oil
                </li>
                <li>
                  1 sweet onion, diced
                </li>
                <li>
                  2 zucchini, or summer squash, diced
                </li>
                <li>
                  2 ears sweet corn kernels, removed from the cob
                </li>
                <li>
                  2 cloves garlic, minced or grated
                </li>
                <li>
                  1 tablespoon fresh ginger, grated
                </li>
                <li>
                  2-3 tablespoons Thai red curry paste
                </li>

                <li>
                  14 ounce can full fat coconut milk
                </li>
                <li>
                  1 tablespoon fish sauce (soy sauce for vegan option)
                </li>
                <li>
                  2 teaspoons honey
                </li>
                <li>
                  juice and zest from 1/2 a lime
                </li>
                <li>
                  1/4 cup fresh cilantro OR basil, roughly chopped
                </li>
                <li>
                  sliced jalapeño pepper and green onions, for serving
                </li>

              </ul>

          </div>
          <div className="w-1/2">
           
            <ol>
              <li>
                Cook rice noodles according to packaged directions. 
              </li>
              <li>
                Heat the coconut oil in a large skillet over high heat. Add the onion and cook 5 minutes or until fragrant. Add the zucchini, corn, garlic, and ginger. Cook the veggies another 5 minutes or until they just begin to soften.
              </li>
              <li>
                Stir in the curry paste and cook until fragrant, about 1 minute.
              </li>
              <li>
                Add the coconut milk, 1/3-1/2 cup water, fish sauce, and honey. Stir to combine, bring the mixture to a boil, cook 5 minutes or until the sauce thickens slightly. If the sauce thickens too much, add additional water to thin. Remove from the heat and stir in the lime juice and zest, cilantro, and basil.
              </li>
              <li>
                To serve, divide the noodle among bowls and spoon the curry overtop. Top with peppers and green onions. Enjoy!
              </li> 
            </ol>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Recipe