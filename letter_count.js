
    function count_up() {
         let dat;
         let all;
         let str_len;
         let str_out;
         let str_find;
         let str_memory;
         let str_cnt;

         all = document.getElementById('text1').value;

         dat = document.getElementById('text1').value.length;
//     function count_up() {
     // alert(dat);
     document.getElementById('count1').innerHTML = dat;
     //        document.getElementById('text1').innerHTML = obj.value.length;

     document.getElementById('count2').innerHTML = str_count(all, " ") + "(" + str_count(all, "　") + ")";
     
     document.getElementById('count3').innerHTML = str_count(all, "\n");
     
     //document.getElementById('count4').innerHTML == all.substr( 0, 1 );
     document.getElementById('count4').innerHTML = str_count(all, all.substr( 0, 1 ));


     str_out = "";
     str_memory = " " + "　" + "\n";
     str_cnt = 0;
     for(str_len = 0 ; str_len < dat; str_len++){
          str_find = all.substr( str_len, 1 );
          if(str_count(str_memory,str_find) == 0){
               str_cnt = str_cnt + 1;
               str_out = str_out + str_find + ":" + str_count(all, str_find) + "　　　";
               if(str_cnt % 5 == 0){
                    str_out = str_out + "<br>"
               }
               str_memory = str_memory + str_find;
          }
     }

     document.getElementById('count4').innerHTML = str_out;

     }

     // all の中に part が出現する回数を取得
     function str_count(all, part) {
         return (all.match(new RegExp(part, "g")) || []).length;
     }
