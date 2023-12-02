/*//ジャイロ関係
if(window.DeviceOrientationEvent){
  // ★iOS13向け: ユーザーにアクセスの許可を求める関数があるか？
  if(DeviceOrientationEvent.requestPermission){
      var sensor_contents= document.getElementById("sensor_contents");
      // id="sensor_contents" な要素がクリックされたら
      sensor_contents.addEventListener("click", function(){
          // ★ジャイロセンサーのアクセス許可をリクエストする
          DeviceOrientationEvent.requestPermission().then(function(response){
              // リクエストが許可されたら
              if(response === "granted"){
                  // deviceorientationが有効化される
              }
          }).catch(function(e){
              console.log(e);
          });
				
      });
  // iOS13以外
  }else{
      // 何もしない
  }
}
// ジャイロの処理

let gyroData = {
  "x":0,
  "y":0,
  "z":0
}

addEventListener("deviceorientation", (event) => {
  gyroData.x = event.alpha;
  gyroData.y = event.gamma;
  gyroData.z = event.alpha;

}, true);



function ctrWithGyro() {
  aircraft.elevator = 0;
  const a = Math.PI/4;
  if (Math.abs(gyroData.x) > a) {
    if (gyroData.x > a) {
      aircraft.elevator = 1;
    }else{
      aircraft.elevator = -1;
    }
  }else{
    aircraft.elevator = gyroData.x/a;
  }
}*/