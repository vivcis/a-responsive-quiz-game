       // Array containing user questions
var q=["The biggest desert in the world is?","Which of these cities is not in Europe?",
"This specifies a location's distance north or south of the equator",
"The united kingdom is comprised of how many countries?", 
"Which is the smallest country, measured by total land area?"];

        // Array containing user choices
var op1=["Arabian","Moscow","Parallel","6","Vatican City"];
var op2=["Sahara","Prague","Latitude","5","Monaco"];
var op3=["Great Australian","Reykjavik","Longitude","4","Maldives"];
var op4=["Kalahari Desert","Amsterdam","Grid-lines","8","Tuvalu"];
var op4=["Gobi Desert","Paris","Greenwich","7","Saint Kitts and Nevis"];

        // array containing the correct answers
var a=[2,1,2,3,1];

// assigning variables
   var pid,turn=0,disable=false,enable=true, l=a.length,btnid,trn=0,score=0,qno=1,ans;
        function setvalue(id,value)
           {
                 document.getElementById(id).innerHTML=value;
              }
              // re-assigning 
                     function wrong(id,c,bg,br){
                           document.getElementById(id).style.color=c;
                           document.getElementById(id).style.backgroundColor=bg;
                           document.getElementById(id).style.border=br;
                                 }
                             function setstyle(id,value)
                                    {
                                     document.getElementById(id).style.display=value;
                                       }
                                         function bid(id)
         {
                                        window.navigator.vibrate(50);
                                           if(turn>0 && disable==false)
                                              wrong(btnid,"#ffffff","#4e2db3","");
                                                        btnid=document.getElementById(id).value;
                                                if(enable==true)
                                                     setstyle("option","inline");
                                                              setvalue("option","Option Selected:"+btnid);turn++;
                                                   if(disable ==false)
                                                      wrong(btnid,"#4e2db3","#ffffff","");
                                       }
                                                             function display()
                                                                {
                                                                  setstyle("quiz","");
                                                                  setvalue("yscore","Your score="+score);
                                                                  setstyle("result","none");
                                       disable=false;setvalue("name","<b><i>By vivcis</i></b>");
                                            for(i=1;i<5;i++)
                                                    document.getElementById(i).style="";
                              setstyle("option","none");
                              setvalue("quesno","Total questions:"+l);
                                  if(btnid==ans && trn==1){
                                             score+=1;
                                                    wrong(btnid,"#ffffff","#66ff99","6px solid green");btnid="given";setvalue("yscore","Your score="+score);setvalue("submit","<b>Next&#8594</b>");window.navigator.vibrate(50);
                                                       return ;
                                                               }
                                                                else{
                                                                  if(trn==1 && ans>0 && btnid!="given"){
                                                                     for(i=1;i<5;i++){
                                                                       if(i==ans){
                                                                           wrong(i,"#ffffff","#66ff99","6px solid green");setvalue("submit","Next&#8594");
                                 setvalue("yscore","Your score="+score)}
                                      else{
                                           wrong(i,"#ffffff","#ff5959","4px solid #ff0000");setvalue("submit","<b>Next&#8594</b>");
                                               }
                                                 }window.navigator.vibrate(100);
                                                       ans=0;disable=true;enable=false;
                                                              return ;
                                  }
                           }
                           // Getting result
                                     trn=1;
                                        if(a.length>0)
                                              {enable=true;
                                                     turn=0;
                                                         var rand=Math.floor(Math.random()*(a.length));
                                                              setvalue("question","(Q."+qno+") "+q[rand]);q.splice(rand,1);
                                                              setvalue("submit","<b>Submit</b>");
                                                              setvalue("1",op1[rand]);op1.splice(rand,1);
                                                              setvalue("2",op2[rand]);op2.splice(rand,1);
                                                              setvalue("3",op3[rand]);op3.splice(rand,
                                                                      1);
                                                                   setvalue("4",op4[rand]);op4.splice(rand,1);ans=a[rand];a.splice(rand,1);qno++;btnid=null;
                                   }
                                    else{
                                       qresult();
                                                  }
                                                        }
                                                        // Ending of the game without attempting all the questions
                                                           function end()
                                                              {
                                                                if(confirm("Do you really want to end the quiz?")==true)
                                                                      qresult();
                                                                             }
                                                                            function qresult()
                                                                                      {
                                                                    setstyle("quiz","none");
                                                                    setstyle("result","");
                                                                    setvalue("attempt","Question attempted="+(qno-1));
                                                                    setvalue("correct","Questions correct="+(score));
                                                                    setvalue("myscore","Your score="+(score));
                                                   }