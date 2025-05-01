$(document).ready(function(){

    let indexslide = 1;
    showSlides(indexslide);

    /* Slide Selection */

    $(".prev").click(function(){
        if(indexslide==1){
            indexslide = 6;
            showSlides(indexslide);
            console.log(indexslide);
        }else{
            showSlides(indexslide += -1);
            console.log(indexslide);
        }
    })
    $(".next").click(function(){
        showSlides(indexslide += 1);
        console.log(indexslide);
    })
    $(".demo-slide").click(function(){
        let n = $(this).data('id');
        showSlides((indexslide = n));
        console.log(n);
    })

    /* Typing effect */

    $("#firstA").on("animationend", () => {
        $("#firstA").addClass("hide");
        $("#secondA").addClass("show");
    })
    
    /* Sliding effect */
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                $(entry.target).addClass('visible');
            }else{
                $(entry.target).removeClass('visible');
            }
        });
        {threshold: 0.5}
    });
    $(".hidden").each(function(){
        observer.observe(this);
    })
    /* Slides */
    function showSlides(n){
        let i;
        let slides = $(".slides");
        let dots = $(".demo-slide");
        if (n > slides.length) {
          indexslide = 1;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[indexslide-1].style.display = "block";
        dots[indexslide-1].className += " active";
        $(".caption").html(dots[indexslide-1].alt);
        console.log(dots[indexslide-1].alt);
    }

});