//https://teachablemachine.withgoogle.com/models/sJKrhCJHk/model.json
function Classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/sJKrhCJHk/model.json", model_ready);
}
function model_ready(){
    classifier.classify(got_result);
}
function got_result(){
    console.log("got Result");
}