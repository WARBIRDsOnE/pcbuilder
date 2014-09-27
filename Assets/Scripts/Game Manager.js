#pragma strict
var moveCamera = false;
// Transforms to act as start and end markers for the journey.
	var startMarker: Vector3;
	var endMarker: Vector3;
	
	// Movement speed in units/sec.
	var speed = 35.0;
	
	// Time when the movement started.
	private var startTime: float;
	
	// Total distance between the markers.
	private var journeyLength: float;
	
	var target : Transform;
	var smooth = 15.0;
	
	var endZoom = 20f;
	
	function Start() {
		
		// Keep a note of the time the movement started.
		//startTime = Time.time;
		
		startMarker = Vector3(0,0,-20);
		endMarker = Vector3(-12,0,-40);
		
		// Calculate the journey length.
		journeyLength = Vector3.Distance(startMarker, endMarker);
		
		var prefab : GameObject = Resources.Load("Prefabs/Components/Boitier component ATX", GameObject);
		var instance : GameObject = Instantiate(prefab, transform.position, transform.rotation);
		
	}
	
	// Follows the target position like with a spring
	function Update () {
	if (moveCamera)
	{
		// Distance moved = time * speed.
		var distCovered = (Time.time - startTime) * speed;
		
		// Fraction of journey completed = current distance divided by total distance.
		var fracJourney = distCovered / journeyLength;
		
		// Set our position as a fraction of the distance between the markers.
		Camera.main.transform.position = Vector3.Lerp(startMarker, endMarker, fracJourney);
		if (Camera.main.orthographicSize < endZoom)
		{
			Camera.main.orthographicSize += 7.8f * Time.deltaTime;
		}
	}

	}

function OnGUI() {
	if (GUI.Button(Rect(10,70,50,30),"Next Step"))
	{
		moveCamera = true;
		startTime = Time.time;
	//Camera.main.transform.position.z = 
		//Camera.main.orthographicSize = 15;
		//Camera.main.transform.Translate(Vector3(50.0,0,0) * Time.deltaTime);
		//Camera.main.transform.position.x -= 15 * Time.deltaTime; 
	}
}