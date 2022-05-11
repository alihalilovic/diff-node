# diff-node 📂
A formatter for showing differences between two files in JSON format, written using node
<br>
- Preferably used for config files based on a given separator
- Uses GNU diff under the hood

<h3>Example usage</h3>
📑 file_1.txt
<br>
<code>version=0.1</code>

<br>
<br>

📑 file_2.txt
<br>
<code>version=0.2</code>

<br>

result.json (script pipes everything here)
<br>
<code>[ { version: { oldValue: 0.1, newValue: 0.2 } } ]</code>



