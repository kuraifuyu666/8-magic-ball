$(document).ready(function() {
  let answers = [
    "C'est certain.", 
    "Sans aucun doute.", 
    "Oui, définitivement.", 
    "Vous pouvez compter dessus.", 
    "D'après moi, oui.", 
    "Les signes indiquent que oui.", 
    "Très probable.", 
    "Bonne perspective.", 
    "Oui.", 
    "Les signes pointent vers oui.", 
    "Réponse floue, essayez à nouveau.", 
    "Demandez plus tard.", 
    "Mieux vaut ne pas vous le dire maintenant.", 
    "Je ne peux pas le prédire maintenant.", 
    "Concentrez vous et demandez à nouveau.", 
    "Ne comptez pas dessus.", 
    "Ma réponse est non.", 
    "Mes sources disent non.", 
    "La perspective n'est pas bonne.", 
    "Très douteux."
  ];

  
  $("#questionButton").click(function() {
    
    let question = $("#question").val();

    
    if (question === "") {
      alert("entre une question pelo!");
    } else {
      
      $("#eight_ball").effect("shake");

      
      let randomIndex = Math.floor(Math.random() * answers.length);
      let randomAnswer = answers[randomIndex];
      let audio = new Audio("foret.mp3");
      audio.volume = 0.1;
      audio.play();
      
      $("#answer").text(randomAnswer);

      $("#eight_ball").removeClass("questionside").addClass("answerside");

      $("#question").val("");
    }
  });
});
