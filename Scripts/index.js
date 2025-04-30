$(document).ready(function(){
    /* Typewriter effect*/
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
});