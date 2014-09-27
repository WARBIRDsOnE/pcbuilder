using UnityEngine;
using System.Collections;

public class CPU_classes : MonoBehaviour {
	private bool _isConnected = false;

	public bool getIsConnected()
	{
		return (_isConnected);
	}

	public void setIsConnected()
	{
		_isConnected = true;
	}
}
