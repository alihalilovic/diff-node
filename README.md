# diff-node 📂
A formatter for showing differences between two files in JSON format, written using node
<br>
- Preferably used for config files based on a given separator
- Uses GNU diff under the hood

<h3>Example usage</h3>
📑 file_1.txt
<br>
<br>

    version=0.1
    panel_legacy=false
    
📑 file_2.txt

    version=0.2
    panel_legacy=true

📗 result.json (script pipes everything here)
<br>

    [
      {
        "key": "version",
        "oldValue": "0.1",
        "newValue": "0.2"
      },
      {
        "key": "panel_legacy",
        "oldValue": "false",
        "newValue": "true"
      }
    ]
    
    



