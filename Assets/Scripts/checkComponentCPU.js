var _isAttached = false;
var cpu : GameObject = null;

function OnTriggerStay2D(coll: Collider2D) {
	//String tmp = coll.gameObject.tag.ToString();
	
	renderer.material.color -= Color(0.5, 0, 0) * Time.deltaTime;
	if (cpu == coll.gameObject)
	{
		coll.gameObject.transform.position = transform.position;
		//coll.gameObject.GetComponent("CPU_classes").setIsConnected();
		coll.gameObject.transform.parent = this.transform.parent;
	}
	
	if (coll.gameObject.tag == "processor" && !_isAttached && Input.GetMouseButtonUp(0))
	{
		cpu = coll.gameObject;
		_isAttached = true;
		coll.gameObject.GetComponent("CPU_classes").setIsConnected();
	}
	else
	{
		Debug.Log("ko");
	}
}
