var _isAttached = false;
var rad : GameObject = null;

function OnTriggerStay2D(coll: Collider2D) {
	//String tmp = coll.gameObject.tag.ToString();
 	//var cpuClass: CPU_Classes;
 	//cpuClass = GetComponent("CPU_Classes");
	//Debug.Log(cpuClass.getIsConnected().toString());
	if (rad == coll.gameObject)
	{
		coll.gameObject.transform.position = transform.position;
		//coll.gameObject.GetComponent("CPU_classes").setIsConnected();
		coll.gameObject.transform.parent = this.transform.parent;
	}
	
	if (coll.gameObject.tag == "radiator" && !_isAttached && Input.GetMouseButtonUp(0))
	{
		rad = coll.gameObject;
		_isAttached = true;
	}
	else
	{
		Debug.Log("ko");
	}
}
