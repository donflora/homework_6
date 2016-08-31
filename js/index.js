$(document).ready(function(){
    var cityList = ['Austin', 'Los Angeles', 'New York City', 'San Francisco', 'Sydney'];
    var keys = ['austin', 'la', 'nyc','sf','sydney']
    
    //append the items in cityList as options to the select 
    //$('#city-type').append('<option value="austin">austin</option>');
    
    for (i=0; i<cityList.length; i++){
        var optionString = '<option value="' + keys[i] + '">' + cityList[i] + '</option>';
        console.log(optionString);
        $('#city-type').append(optionString);
    }
    
    //$('#city-type').on('change',function(){
       // $('body')
 //   })
    
    $('#city-type').change(function(){
        $('body').attr('class',$(this).val());
        console.log(this.value);
    })
})