(function (){
    "use strict"
    console.log("working")
    //vertical slider Object
    const vertical_slider = {
        //slide class name
        slider_class:".slider",
        //Show slide
        show_slide:function (slide_id, context_item){
            const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
            if(slide_container){
                const slides = slide_container.querySelectorAll(".slide");
                if(slides && slides[slide_id]){
                    //scroll to active slide
                    slide_container.scrollTo({
                        top:slides[slide_id].offsetTop,
                        behavior: "smooth"
                    });
                    //set Active context item
                    const active_context_item = 
                    context_item.closest(".slide_navigation").querySelector(".active");
                    if(active_context_item){
                        active_context_item.classList.remove("active");
                    }
                    context_item.classList.add("active");
                }
            }
        
    },
    //Intialize slide
    init_slider: function(slider){
        

        const navigation_items = 
        slider.querySelectorAll(".slide_navigation a");
        if(navigation_items){
            Object.keys(navigation_items).forEach(function(key){
                navigation_items[key].onclick = function(e){
                    e.preventDefault();
                    vertical_slider.show_slide(key, navigation_items[key]);
                };
            });
        }
    }, 
    //Intialize sliders
    init: function(){
        // Iterate over each slide
        document.querySelectorAll(this.slider_class).forEach((slider)=>this.init_slider(slider));
    }
};
vertical_slider.init();
  
}());