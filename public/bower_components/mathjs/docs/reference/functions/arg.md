# Function arg

Compute the argument of a complex value.
For a complex number `a + bi`, the argument is computed as `atan2(b, a)`.

For matrices, the function is evaluated element wise.


## Syntax

```js
math.arg(x)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | Number &#124; Complex &#124; Array &#124; Matrix &#124; Boolean &#124; null |  A complex number or array with complex numbers

### Returns

Type | Description
---- | -----------
Number &#124; Array &#124; Matrix | The argument of x


## Examples

```js
var a = math.complex(2, 2);
math.arg(a) / math.pi;          // returns Number 0.25

var b = math.complex('2 + 3i');
math.arg(b);                    // returns Number 0.982793723247329
math.atan2(3, 2);               // returns Number 0.982793723247329
```


## See also

[re](re.md),
[im](im.md),
[conj](conj.md),
[abs](abs.md)


<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->
