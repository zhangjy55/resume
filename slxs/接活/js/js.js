            function abc1(){
                document.getElementById('u1').style.display='block';
                document.getElementById('u2').style.display='none';
                document.getElementById('u3').style.display='none';
                document.getElementById('u4').style.display='none';
            }

              function abc2(){
                  document.getElementById('u1').style.display='none';
                  document.getElementById('u2').style.display='block';
                  document.getElementById('u3').style.display='none';
                  document.getElementById('u4').style.display='none';
              }
            function abc3(){
                document.getElementById('u1').style.display='none';
                document.getElementById('u2').style.display='none';
                document.getElementById('u3').style.display='block';
                document.getElementById('u4').style.display='none';
            }
              function abc4(){
                document.getElementById('u1').style.display='none';
                document.getElementById('u2').style.display='none';
                document.getElementById('u3').style.display='none';
                document.getElementById('u4').style.display='block';
            }
             function abc5(){
                document.getElementById('u5').style.display='block';
                document.getElementById('u6').style.display='none';
                document.getElementById('u7').style.display='none';
                document.getElementById('u8').style.display='none';
            }

              function abc6(){
                  document.getElementById('u5').style.display='none';
                  document.getElementById('u6').style.display='block';
                  document.getElementById('u7').style.display='none';
                  document.getElementById('u8').style.display='none';
              }
            function abc7(){
                document.getElementById('u5').style.display='none';
                document.getElementById('u6').style.display='none';
                document.getElementById('u7').style.display='block';
                document.getElementById('u8').style.display='none';
            }
              function abc8(){
                document.getElementById('u5').style.display='none';
                document.getElementById('u6').style.display='none';
                document.getElementById('u7').style.display='none';
                document.getElementById('u8').style.display='block';
            }
            function abc9(){
                document.getElementById('u9').style.display='block';
                document.getElementById('u10').style.display='none';
                document.getElementById('u11').style.display='none';
                document.getElementById('u12').style.display='none';
            }

              function abc10(){
                  document.getElementById('u9').style.display='none';
                  document.getElementById('u10').style.display='block';
                  document.getElementById('u11').style.display='none';
                  document.getElementById('u12').style.display='none';
              }
            function abc11(){
                document.getElementById('u9').style.display='none';
                document.getElementById('u10').style.display='none';
                document.getElementById('u11').style.display='block';
                document.getElementById('u12').style.display='none';
            }
              function abc12(){
                document.getElementById('u9').style.display='none';
                document.getElementById('u10').style.display='none';
                document.getElementById('u11').style.display='none';
                document.getElementById('u12').style.display='block';
            }
          


           window.onload = function(){
                var ad = document.getElementById("ad");
                var win_height = document.body.scrollHeight;
                var win_width = document.body.scrollWidth;
                var max_top = win_height - ad.offsetHeight;
                var max_left = win_width - ad.offsetWidth;
                var x=1,y=1;
                
              
                function run(){
                    
                    var old_left = ad.offsetLeft;
                    var old_top = ad.offsetTop;
                    var new_left = old_left+x;
                    var new_top = old_top+y;

                    if (new_top>max_top) {
                        new_top = max_top;
                    }
                    if (new_left>max_left) {
                        new_left = max_left;
                    }
                    if (new_left<0) {
                        new_left=0;
                    }
                    if (new_top<0) {
                        new_top=0;
                    }



                   
                    ad.style.left = new_left+'px';
                    ad.style.top = new_top+'px';

                    if (new_top == max_top) {
                        y = -1;
                    }
                    if (new_top==0) {
                        y=1;
                    }
                    if (new_left == max_left) {
                        x = -1;
                    }
                    if (new_left==0) {
                        x=1;
                    }

                }
                

            
                var timer = setInterval(run,6);
                ad.onmouseover = function(){
                clearInterval(timer);
                }




                
                ad.onmouseout = function(){
                    
                    timer = setInterval(run,6);
                }

              
                var f11 = document.getElementById("f11");
                    f11.onclick = function(){
                    ad.style.display = 'none';
                }

             
                window.onresize = function(){
                   
                    ad.style.left = 0;
                    ad.style.top = 0;
                    x=1;
                    y=1;
                    
                var win_height = document.documentElement.clientHeight;
                var win_width = document.documentElement.clientWidth;
                max_top = win_height - ad.offsetHeight;
                max_left = win_width - ad.offsetWidth;
                }
            }