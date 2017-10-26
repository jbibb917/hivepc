$('#quotebtn').on('click', function(){
var sum = 
parseInt($('#gpuSelect select').val())
+parseInt($('#cpuSelect select').val())
+parseInt($('#moboSelect select').val())
+parseInt($('#ramSelect select').val())
+parseInt($('#hddSelect select').val())
+parseInt($('#coolerSelect select').val())
+parseInt($('#powerSelect select').val())
+parseInt($('#caseSelect select').val());
alert("Your quote for those parts is £" + sum);

});