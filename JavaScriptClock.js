body {
    background: #110011;
}
@font-face {
    font-family: "DS-Digital";
    src: url("../digital_clock_javascript_version1/DS-DIGIT.TTF") format('truetype');
    
}

div {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

h1 {
    font-family: "DS-Digital";
    color: limegreen;
    font-size: 10rem;
    text-align: center;   
}

/* Desktop First approach */
@media (max-width: 600px) {
    h1 {
        font-size: 5rem;
        color: rgb(250, 250, 250);
        text-align: center; 
    }


} 

