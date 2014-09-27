var _isAttached = false;
var alim : GameObject = null;

function OnTriggerStay2D(coll: Collider2D) {
	renderer.material.color -= Color(0.5, 0, 0) * Time.deltaTime;
	if (alim == coll.gameObject)
	{
		coll.gameObject.transform.position = transform.position;
		//coll.gameObject.GetComponent("CPU_classes").setIsConnected();
		//coll.gameObject.transform.parent = this.transform.parent;
	}
	
	if (coll.gameObject.tag == "alim" && !_isAttached && Input.GetMouseButtonUp(0))
	{
		alim = coll.gameObject;
		_isAttached = true;
	}
	else
	{
		//Debug.Log("ko");
	}
}