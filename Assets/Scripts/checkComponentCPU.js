var _isAttached = false;
var cpu : GameObject = null;

function OnTriggerStay2D(coll: Collider2D) {

	if (cpu == coll.gameObject)
	{

		//coll.gameObject.GetComponent("CPU_classes").setIsConnected();
	}
	
	if (coll.gameObject.tag == "processor" && !_isAttached && Input.GetMouseButtonUp(0))
	{
		cpu = coll.gameObject;
		_isAttached = true;
		coll.gameObject.GetComponent(CPU_class).setIsConnected();
	}
	else
	{
		//Debug.Log("ko");
	}
}
