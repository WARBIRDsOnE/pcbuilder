var _isAttached = false;
var rad : GameObject = null;

function OnTriggerStay2D(coll: Collider2D) {

	if (rad == coll.gameObject)
	{
		coll.gameObject.transform.position = transform.position;
		//coll.gameObject.GetComponent("CPU_classes").setIsConnected();
		coll.gameObject.transform.parent = this.transform.parent;
		coll.gameObject.GetComponent(FollowMouse).enabled = false;
	}
	
	if (coll.gameObject.tag == "radiator" && !_isAttached && Input.GetMouseButtonUp(0))
	{
	Debug.Log("lOL"+coll.gameObject.GetComponent(CPU_class).getIsConnected());
		if (coll.gameObject.GetComponent(CPU_class).getIsConnected())
		{
			rad = coll.gameObject;
			_isAttached = true;
		}
	}
	else
	{
		//Debug.Log("ko");
	}
}
