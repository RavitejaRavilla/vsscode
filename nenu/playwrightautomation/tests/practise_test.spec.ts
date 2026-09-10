import{test} from '@playwright/test'


test.describe("My first test", ()=> {
 
  test.describe("My first hotel booking", ()=> {
          test("hotel booking 1", ()=> {
          console.log("hotel started 1") 

        });

             test("hotel booking 2", ()=> {
                 console.log("hotel started 2")

              });

  });

      test.describe("My first flight booking", ()=> {
            test("flight booking 1", ()=> {
                console.log("flight started 1")

            });

                  test("flight booking 2", ()=> {
                    console.log("flight started 2") 

                  });





      });


});



