/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    const list = [2,30,4];
    console.log(list);   //exibe o array     
    

    let ordem_decrescente = list.sort(function(a, b) { return b - a; });
    let terceiro_maximo = ordem_decrescente[2];
    
    console.log("Terceiro número máximo: ", terceiro_maximo);

    if (list.length == 0)
    {
        console.log("O array não tem números");
    }
    // console.log(Math.max.apply(null, list))    
  };

  thirdMax()