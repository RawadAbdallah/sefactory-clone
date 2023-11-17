let animatedTypedText = new Typed('#typed_text',{
    strings: ['Software engineer?', 'Data engineer?', 'UI/UX designer?'],
    typeSpeed: 75,
    backSpeed: 45,
    bindInputFocusEvents: true,
    loop: true,
    cursorChar: '_',
    backDelay: 1200,
    startDelay: 0,
    preStringTyped: (index, self) =>{
        let colors = ['rgba(40, 238, 167, 0.93)', 'rgba(40, 238, 167, 0.93)', 'rgba(152, 100, 218, 0.93)', 'rgba(251, 80, 142, 0.93)', ];
        let textColors = ['#363738', '#363738', '#ffffff', '#ffffff'];
        document.getElementById('animated-hero-overlay').style.backgroundColor = colors[index];
        document.getElementById('typed_text').style.color = textColors[index];
        document.getElementById('animated-hero-desc').style.color = textColors[index];
        
    }
});

