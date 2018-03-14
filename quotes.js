    var e = document.getElementById("quote_display");
    var cs=document.defaultView.getComputedStyle(e,null);
    var bg=cs.getPropertyValue('background-color');
    document.body.style.backgroundColor=bg;
    
    var fb = document.getElementsByClassName("facebook");
    fb[0].addEventListener('click',facebookQuote);
    
    // test run code
    
//    var quotes = [
//        {
//            "quote":"You can't look at a sleeping cat and be tense.",
//            "author":"Jane Pauley"
//        },
//        {
//            "quote":"I fear there will be no future for those who do not change.",
//            "author":"Louis L'Amour"
//        },
//        {
//            "quote":"Old friends, we say, are best, when some sudden disillusionment shakes our faith in a new comrade.",
//            "author":"Gelett Burgess"
//        },
//        {
//            "quote":"Fewer things are harder to put up with than the annoyance of a good example.",
//            "author":" Mark Twain"
//        }
//    ];
//    
//    console.log(quotes);
//    
    var colors = [
        {
            "frontendColor" : "#EF9A9A",
            "backgroundColor" : "#E53935"
        },
        {
            "frontendColor" : "#C8E6C9",
            "backgroundColor" : "#388E3C"
        },
        {
            "frontendColor" : "#F48FB1",
            "backgroundColor" : "#EC407A"
        },
        {
            "frontendColor" : "#CE93D8",
            "backgroundColor" : "#AB47BC"
        },
        {
            "frontendColor" : "#B39DDB",
            "backgroundColor" : "#7E57C2"
        },
        {
            "frontendColor" : "#80CBC4",
            "backgroundColor" : "#00897B"
        }
    ];
    
    
    function nextQuote(){
        getQuote();
    }
    
   
    function getQuote()
    {       
        const url = "https://random-quote-generator.herokuapp.com/api/quotes/random";
       
        fetch(url)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
                var q = document.getElementById("online_quote");
                var a = document.getElementById("author");
                if(data.quote.length>=90)
                    {
                        q.style.fontSize = 20;
                    }
                q.innerHTML = data.quote;
                a.innerHTML = data.author;
            })
            .catch(function () {
              console.log("An error occurred");
            });
        
        var color_random = Math.floor(Math.random()*6);
        document.getElementById("quote_display").style.background = colors[color_random].frontendColor;
        document.body.style.backgroundColor = colors[color_random].backgroundColor;
        
        var buttons = document.getElementsByClassName("quote_buttons");
        for(i=0;i<buttons.length;i++)
            {
                buttons[i].style.color = colors[color_random].frontendColor;
            }
    }
    
    
    function twitterQuote() {
      var generatedQuote = document.getElementById('online_quote').innerHTML;
      var generatedQuoteAuthor = document.getElementById('author').innerHTML;        
      var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote) + ' By ' +encodeURIComponent(generatedQuoteAuthor) ;
       window.open(tweetUrl);
    }
    
    
    function facebookQuote(){
         var generatedQuote = document.getElementById('online_quote').innerHTML;
      var generatedQuoteAuthor = document.getElementById('author').innerHTML;  
        var fbShare = ' https://www.facebook.com/sharer/sharer.php?' + encodeURIComponent(generatedQuote) + ' By ' +encodeURIComponent(generatedQuoteAuthor) ;
       window.open(fbShare);
    }
    getQuote();
