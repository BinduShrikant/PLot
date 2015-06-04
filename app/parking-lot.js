



module.exports = function() {
  var i=0,slot=0;
  var cases,car, answer;
  var cmax=20;
  var rmax=20;

var list=new Array(20);
var cases_n_car=new Array(2);

for(k=0;k<list.length;k++)
 list[i]=new Array(2);

 for(k=0;k<list.length;k++)
  {
    list[k][0] = 999;
    list[k][1] = 999;
  }

i=0;

var parking = function(cases) {

  //console.log(cases);
  cases_n_car = cases.split(" ");
  //console.log(list[i][0]);
  //console.log(list[i][1]);
  cases = cases_n_car[0];

    if(cases == 1)
    {
        var slot= parkingLot().slotempty();
       list[i][0]=cases_n_car[1];
       list[i++][1]=slot+1;
       return "Parked";

    }
    else if(cases == 2)
    {
      for(k=0;k<list.length;k++)
        if(list[k][0]==cases_n_car[1])
          {
            list[k][0]==-1;
            list[k][1]==-1;
            return "Unparked";

          }
    }
    else {

      return "Wrong option!";

    }
  }

  var slotempty = function()
  {
    for(slot=0;slot<list.length;k++)
      {
        if(list[k][0]==999)
        break;
      }

     return slot;
  }
  return {parking: parking,slotempty:slotempty};






};
