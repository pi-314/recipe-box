## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-HXa6xmJHMEfHIi/hDPtTbigJQtXSLC1v3Leof82ZGiiIQHcgvyioqE8wgdLm/Mgi /es/languages/accesslog.js
sha384-QqfeezSFk3jFhiaBPAGWdCdQGBdBckwrd9PXxjsb1OObrgikKVL+tcnJYLsSReEH /es/languages/accesslog.min.js
sha384-h+WRl4BTTVy31uw0ZuOybtJsEIlOq2Q4LSWUjK8gKrhdXEqYHP7Qu+MmBIZIqZtO /es/languages/apache.js
sha384-xuOg8cLlaKYVwu8KcJCX2nbs9mrVa7Ngz0c9NQiwViwl408M5TX3w1FC22RHhUuS /es/languages/apache.min.js
sha384-RUztCzxEjYyjTIr1xn04xHYn094/NrWUPagE08eCjI3ha3VPLU6wkyQpsmXEWyqX /es/languages/asciidoc.js
sha384-9XM0lQmJ4T2vT5fovmdMwihL4baMIxlzYPj6DUTgkGIQPNur/r5HVQmz7NufVMHp /es/languages/asciidoc.min.js
sha384-wLveqgFaOQ9PzFODfn1IxFZ54KAIj/Opx/7gUnbN9eOC3XsWaK7zEAnX0c79VQEz /es/languages/awk.js
sha384-ZtSXWAZLFp62aXWYyynhvbh2tt+/B8/dq0PoZd8lNMmhGj9kec6R9TAkI2SPFKAx /es/languages/awk.min.js
sha384-no5/zgQGupzPFGWV8VpJzfQau5/GI2v5b7I45l6nKc8gMOxzBHfgyxNdjQEnmW94 /es/languages/bash.js
sha384-u2nRnIxVxHkjnpxFScw/XgxNVuLz4dXXiT56xbp+Kk2b8AuStNgggHNpM9HO569A /es/languages/bash.min.js
sha384-qimhSkVWof5rfaFajQk8KAtzSRYyIArcJCMKWdDcNq34F4uplk08wmEyUiYLmO+3 /es/languages/c.js
sha384-5fESKgrRcGs7I/89bn7NKFcHyvIVcmQIG4JfCEAV5Rg5VVtskrmGkHVOIsD1642v /es/languages/c.min.js
sha384-xjI3wQy5aAhTr4JT9bE8tZaEMtNn/fguEQOem1vG04xZl4Ov0uf8bsLkQUoUzvbo /es/languages/cmake.js
sha384-JdSkDmOvEqN4fTPk/zl0QpN/wGh53J+xJRFtOMdEwhZ2iDgT5a/Dl18e/TChDqjK /es/languages/cmake.min.js
sha384-eM9Op3b0ilZ/iW7jeVAMo//MKcEXHCbg1Vf8SMrqds5LIOeF9+3qaX//TsnbItae /es/languages/cpp.js
sha384-+tDHTmLKfBxXgVksRhLEJM4z9PfcGQ2XsrZMDcdJ1SIlPZrtAR4+m4XUX+zJf5nf /es/languages/cpp.min.js
sha384-+9dzNYaLHp3OPspFCOJGrEwfiOV3yqeD/atUDYVt9zKUJ8IW2QxffCT2LfmGfwfW /es/languages/css.js
sha384-G44u1/pUATC8754FIKYqkCxCl9AQYnspnFxzuR3RB1YVnTvqOEofqvZNQMUWcY/1 /es/languages/css.min.js
sha384-conFwWhJOaJ8yLyZJUeX6IlE3YGpdoxazLFVV//QB5E+ASXMVyFnQE1V6SfgMzEq /es/languages/dockerfile.js
sha384-Dw9HMdbM7eZULiZ40cTZJ0NU88GUU5VQ22H+PVZ0IzxPGdnPPqKdsg4Uk3D2wbCB /es/languages/dockerfile.min.js
sha384-nIINmygUn21VB68UmIWrtPRAzGMEgd5hOcfEEeODoG90i4mJzcACbwcWJ3wCiSY2 /es/languages/gradle.js
sha384-D7ZaQQrEs5BBMC2isU1LZZm9ITf31H0h+uPhGRdse290qklkkvt+WXc4sFh3m70B /es/languages/gradle.min.js
sha384-DmHzDhCE3ltNMxzvFexjBF+ku3PcoAMY7WFOXlWIZnV+vEiPek+T5FVXBuYELEAg /es/languages/graphql.js
sha384-y8dkUR8w2ApytztUtIg+27fJuiL5sH1oq9uRGEcpH9zcoYPU/ZFvroB77kwDE7d6 /es/languages/graphql.min.js
sha384-yIW2CKaxiozMCGVe7a2RX90kdUjP0h2gALuNlfKbojKpQn1OmMQLGO7BOqhncFO6 /es/languages/http.js
sha384-j+2AgmE+4SlZjmviwPvbGypcb9BQNHQj043l9Bb3F2fnlusdNxxA5/INHsOrSE6g /es/languages/http.min.js
sha384-0StLGSBIhoerTxrjwG/Lx1LYO/qmSp2TzCqgzCmnBDrVmkkeaFW9vHKuLHK5Ue7H /es/languages/ini.js
sha384-Qk1583V3PAnmXJ00e8ufkLJOuIZIrqrg5sTGoghEOwikzdWrdpiJv8lQqrURXjBG /es/languages/ini.min.js
sha384-ZCfS+s/zxY7O2bm2KoVJo1wUrLEpJDHZAi/LJAdJF5XjnfSWICkg6wHd2SEJGpyR /es/languages/java.js
sha384-716dHwZ7zbZcnEwTe7DLxlm5tH3Iyl8vSW5a2kYPgusEdp5k3A3jeZt0Ck+CjYE0 /es/languages/java.min.js
sha384-oQpcUGMBf+VDTHOLQ1uhPp1FgNBo0OZc9gbXGuVFwAogHlkh/Iw6cvKKgcgCQkmV /es/languages/javascript.js
sha384-3T8DJ91yCa1//uY9h8Bo4QLrgEtbz4ILN2x9kSM4QWX9/1kKu6UXC3RAbVQV85UQ /es/languages/javascript.min.js
sha384-R87hRh4kF8+iz2sB6FvLrfR0XZBohjFXeJKIXld1Eji2UVi+M2+OIgJKma/9Ko6u /es/languages/json.js
sha384-QFDPNpqtrgZCuAr70TZJFM4VCY+xNnyGKwJw2EsWIBJOVcWAns9PHcLzecyDVv+x /es/languages/json.min.js
sha384-BlC0mPZAwpk9QZaocgajHbYH8yYkOUZrDKpeaPBeCGrQfQ6eTZXyInS411HpGnO0 /es/languages/less.js
sha384-vmEaRQjBedDEQk0PmHXdDeC6kbUsP+AhxtGkI2jQ/VdSRZ9ndnDOBUuxp+cZ7pQV /es/languages/less.min.js
sha384-npg+R4K6p4Q5dEzYDKy3gZ+l4mGV8hDMErOZdSSvqLxED30Fhmgb54WD4wkeY5yh /es/languages/makefile.js
sha384-Ev1PV0+HiSwEbi0IfJYmpMoxv3E0sWhAALg1frIiitM9zh2BVDe871H9Z/RGXqFM /es/languages/makefile.min.js
sha384-JkFMmKMbHcXjdfHauRnREGG6i73GyMisdqNivBm4Z9m2Oc82YIu5jQtIjLa508e8 /es/languages/markdown.js
sha384-65/lNNIY+ayhHTtFznjnyZ5w2NDdZIpSEcqjss/p4ex5JamZ46FdYwDDf6IBLCmE /es/languages/markdown.min.js
sha384-WuxmFqZ8YXr3xyK1Salq5t1q46F/VyzVGx48M2ZJPhbodzQ9L8kfnP/0seU78NsC /es/languages/nginx.js
sha384-XOua+gbAwDawIeMkI2pkXOZH9Xxl9/XLoGuPJD5Bs3WS4bMn207o20s+aQtpsqqE /es/languages/nginx.min.js
sha384-+ORCyjxlNVWQ/xCTFlWWc05iwK/J1wTnRy61YcExQSzVjhYQj3DPGtydA9IB3KQy /es/languages/pgsql.js
sha384-OH8IAQNE+/4/z6sdDTBio6BftdgqOsadsVYkSooVoUwdZYg95qly80XMjUigH5zk /es/languages/pgsql.min.js
sha384-dkR9Qv3ZGmcTGGFP26gmcHC9DBgRYE0XLGxF3mBXlBZaBrscW0vIiVN7oTyQmrbe /es/languages/plaintext.js
sha384-AkqanemYxn6S3BQnW2++1+xqywaq2bJfFlfiAkPNd7Yv5t9YsS8tFzVVopyOa747 /es/languages/plaintext.min.js
sha384-8aLAoO/YSb+fhxwbMNNuUeq3x/FJJvtLwRq9nYpoyy4j85IpQURkoRySqJHBFlwu /es/languages/powershell.js
sha384-LA+GHsDHAleSQDZ+9MEiJmTnrJ392Nkux5b1RIiGmzAkRo+4dwKsjS0z/pzCXIFr /es/languages/powershell.min.js
sha384-Ws6d8NiJ3KKfuA1cOK/ZsY4zuyoJWeM2RQpQFv7yHr0J2/5NysTZV9nUqvFGNUqB /es/languages/properties.js
sha384-igG9bugojNt63V6EXJUpd8a75vlEeh+G9suHO7+lk9/sbdQ70Rn0KYsJNRcRxJDC /es/languages/properties.min.js
sha384-AL2CG8F0fSCEbgf1XBvyL2owO9Iell6Slk6Yque87338pLjMk9+22DGe2qDic9wj /es/languages/protobuf.js
sha384-S0SG5LPfLffrYWmoL26SJIw83wbqXQz7YzSwoYH1Fv9oYhT4tok23r4XwLjhwdot /es/languages/protobuf.min.js
sha384-LZ+YGF0Xve9sHzC9G37Kc14gDC6lfDpny2hggVJVfHb+OsTEXgMGLmAWUJzi4YRC /es/languages/rust.js
sha384-/ktfWRgwL+kZAZeeXDl9mwkD/3atjwjkzLCCoSHtME7MzP87wMhUmNUZ83AoqYx2 /es/languages/rust.min.js
sha384-kcAcxYNWYVMr2nwgsILhFHZH+OkRjbK6xazY53sIcW9bta3onTtDBKug0swjsiMC /es/languages/scss.js
sha384-mlx1v98SAsuX2QnqD9+dsXOfilvT7QQjfyOD3HTrvA4TXsxV4yjW/+TqhUADUuOH /es/languages/scss.min.js
sha384-VYwyP5ddOUunx1AGpbtE38OKY2PbjW9kk6X6622tvqprRJk6W8/tgMvI7MqaOZZw /es/languages/shell.js
sha384-gRgqaIgHrAR1qlo866rkV1AUahqopv0dnpFFLAC4X3jYTDagRCTxQBTMFGV1+x1U /es/languages/shell.min.js
sha384-ZX3mm6sjLYWMBTMUJYzvQXYHNWVJkD+t1ppx4BysyVs6cVhvYFVuwMlVCeAwtwm9 /es/languages/sql.js
sha384-DloKeCkj/pTPHeqWu3keGoEPpZJGm44yQjSmSfpWasykAMUobM0hcYFFPsg1PE6K /es/languages/sql.min.js
sha384-BcyijKQAe0oJGoEBf0y/+dTJjKiy4bIAVdjreJw+MiOkPgCEjM/2FY2+W7K6tcEZ /es/languages/typescript.js
sha384-Mfjt0R07QBpLXhGWeCetLw7s2mTQSoXmcyYnfsSNq4V4YG3FwayBjxod9MxjSB1x /es/languages/typescript.min.js
sha384-4601pgEctPyGn7PKZTLv16bd6cWJLZrCg5a+/9ARj1cg9na6NwC+L767YLzdvSdk /es/languages/vim.js
sha384-iGCHxJTxvjzc4eyRff/+05+KaernFwSKiHceFSeDycK+vr6zh9ba2fMppsaMscuO /es/languages/vim.min.js
sha384-TOvJ6ng9+2cEdYIo8UmcklrWBDxDmcyIc8eZ9tntvTcornli0usS+D1YJKmhMdU5 /es/languages/wasm.js
sha384-tu9x6stUNSb4pXeVRKavZtTp8ha5aQOjCp464ykdPSuI1BMHmN/07U/iqeaoKLgE /es/languages/wasm.min.js
sha384-Tdx2DY9ZTHx3KhVXYqOVKx3q1zOboDGlTTv8sgMlER8y4WETtqL+C4VQ7B4A0OGq /es/languages/xml.js
sha384-n9ZezaAVj8pK1BIFZQxmC1BM9yGuBNRgvsOxHMHPCXzqYd1gSYIu9KjgGEm8K57w /es/languages/xml.min.js
sha384-40MP6/ECSjYaTAIf+/ibE2FPeFPQ53WbASndXxMOcXiQtgLbGXUStZVuPSngp7OD /es/languages/yaml.js
sha384-vXmhozexi2dHQBoniIEbWI5ZqDxyVfUs96BUGpqjWL1aberSp9pyxbvK8WCNASGB /es/languages/yaml.min.js
sha384-yuc8tauP3EWSVVc7vXrAEw05ILYmK1tZpwl9pOG2D3aTNCij6+EN7iB45aoFjqXY /languages/accesslog.js
sha384-jSRPpx6rrJge30xNPZiRzm9KMbyWxprw/Are7Y34dZ90vGIUfntrU1T0W+a1RhBq /languages/accesslog.min.js
sha384-CmG/xb1duBmVNCw0Yr7ww0kOxeBU5qY03kVsiLfTX1HDDVs4NiWAL+mx88jxBtao /languages/apache.js
sha384-iUQ9BcUA+p4w9sZAfo8E9iui0Ay0KwBSTIkTLZB8yc3+ExNWmxWMYMLxB1Q1NOZt /languages/apache.min.js
sha384-XQWxU5ed7p1JZtCL9asG4KebId1+C4otC8gt2SOjnhgWGZNUlFu30TAYkALGIjLK /languages/asciidoc.js
sha384-q+4aQVHnY1FwKezXFV3xmaRkdKNu1ux80j8yzOSaAjn9EeziuDYQhRFPdqeNXsds /languages/asciidoc.min.js
sha384-B7brENEiPAVyc8TUQbr3AR5Omi+knfZM+/EOo3TNSuEm5wa7pAZjccc1QrO8Y1bw /languages/awk.js
sha384-eFizm8+WBkIU2d3kalqH2vV0pDtyQ1xPXQyCROjwwsryMMpzIMQgw0CSz+6AUssT /languages/awk.min.js
sha384-4SbTAv3AX2fuPCpSv6HW3p07YgA7hFfcwG2zJHtYv0ATIt1juD3IXj2NSYwTeIpm /languages/bash.js
sha384-83HvQQdGTWqnRLmgm19NjCb1+/awKJGytUX9sm3HJb2ddZ9Fs1Bst2bZogFjt9rr /languages/bash.min.js
sha384-WHdxyD51Y+ytDdcYGVkKHQOThUwwhLl/1GvZxHTHL4ImI4NS32L/B8bvB/1zN/Mk /languages/c.js
sha384-jtwnwOYA+K4zYN55fA4z4U0PTK5oEp4RcLYaXkYRKO3UUzge1o21ArmvKmTRdh/d /languages/c.min.js
sha384-gXeNvrs51WLYPI/WV54m5BSGtmPSOkEngcs0hrofwSIZ+uVCXW6SwnU75AWUpsiH /languages/cmake.js
sha384-NXUiKRE4iB8J7h3t1Z2aLjDRJslCWi4SWqJpec1z0Y927kNqWejg1uGaEh1P3GCK /languages/cmake.min.js
sha384-M2wpTxQe2N0750xYZ0zTinwbmjsZjdtuS7twUUP2dxtHR0YqhY3JuUFyyhANf9Uy /languages/cpp.js
sha384-/yf54L01PbO6NtVs1Pu9rgfNHbKXanLdNcGVuNa0m5+KiyH+1NpZRDK6idm5VoVl /languages/cpp.min.js
sha384-h6xPJgkyvp13tIs697wZHjCH20tW1aJOrvnAKiZZiATSWZp0lyLB4bAdsEhWUSze /languages/css.js
sha384-+MO3D3y/aZzZq7QMAAA5KiuAcqBZivJHFmVUXfwdBoLxEXeGTeQGsNMll4fpnegg /languages/css.min.js
sha384-KgZWfCUcAWOSNTSNOBUrbGToPbSNE30TSimcL9oKDQ35EApOQoCYU4o2ayix5Ohe /languages/dockerfile.js
sha384-jg4vR4ePpACdBVLAe+31BrI3MW4sfv1AS62HlXRXmQWk2q98yJqKR5VxHzuABw8X /languages/dockerfile.min.js
sha384-IZOqI6gvg7a5fn8xvCBNYqwORJwHrhNcuB0hu3O+gRI7Rd7VPHYaWkvSjz+ve/F2 /languages/gradle.js
sha384-Qh5sDx8XR/gARjQgTGqZrWsG9IWURWytCVZFqqUDtx4M16przYikOSpBofp/smEj /languages/gradle.min.js
sha384-y4jAHac6QZpx9l3FE/Q9CbTHzEhF8S7+9Hm8AY4PfpSCmQWpPCdW1rBh63nXebrT /languages/graphql.js
sha384-2vKrGN0+i0vPRkMvpEZkOgi35/Vyn5pGG9Oi+baBPODVLjCrGyhQpwDG+BBEEeA3 /languages/graphql.min.js
sha384-5njNAV6cayF+v1sc70/t3BTkztvcp8TZ61d65U8YUQuXJ45PIrhcgNfccRMd9JsI /languages/http.js
sha384-ubRntct0s40ZDtDRLkxA3/xYX51o5yC2U8SKlky8dhIRsjSnvZiUKLhz0gNTewno /languages/http.min.js
sha384-l2Aa/1StxIePW3t8ALFDwO/VZShzdfn5Y+0qIFkvO4WXem4DA5+6fgKQW+w/xKEk /languages/ini.js
sha384-0/1VV9gfjl+ZuUf+R7fvp6dQlJ5JVh+WzEqjzOwd+PCh8fa104Vm13MBaJjTz+cG /languages/ini.min.js
sha384-cZ2d3Mo/jmTF9r2kHWcHmA8hehxX8N44UN6LSkEhaCRe6t8e9ntd5JEuafywm0aw /languages/java.js
sha384-8mc5ynnm3AlnXn8P3ccSqVAaZIDoijPM08/Hp4DABy6GMy7EHCQFwiIUoGAaGJiO /languages/java.min.js
sha384-p/utwvqrRVOLlz0BjJ0BCGCb2liTDipfz47/QmGXz9hoPIjCKYEgmYUC30VmGgZy /languages/javascript.js
sha384-L/XmDiyusXomLRGcRmcBpPlboRFjpQNV747OJvg+sEOpgGYvUsNwcC4JLNQ2dI6O /languages/javascript.min.js
sha384-psmmPlbfEWGyvRapexDqkVTgNz7Y1xvlGdLNWQSafI4GFQYFDXPZxVXH1laU4n6l /languages/json.js
sha384-Bb6DhE3tUpBROwypL78TbhRUs9QbCt2GxcxVSYglt2l3MefrYkm4CfwjfWhRfQaX /languages/json.min.js
sha384-zlcx7qQtpp4cqCCPEDhWKvb3lEbhomD5HTubdLR78S/3AQBJGkHiT6LGziV0f4yH /languages/less.js
sha384-NZS9QHMmwN86GbNpIvGs4HOB2EzfqPjhIHqZviwZIw1HLumSMRnl4X/OIgpyP0+K /languages/less.min.js
sha384-Z4QQuz3ChYj9P02v2CDc+Y0OAn3iWXtJnyNd0Q6QqW4GV28viT3zcS9tYSmb9x1L /languages/makefile.js
sha384-pYbMiHWycMKEfJaSEsquFRDTjCY7QHvQN0FIfDK0lVMd9DPJuOA7Kq5wZGecvYwM /languages/makefile.min.js
sha384-TVvUXbmPgdS59xZSFUeyNQ1vUkeCbBpuMj3qlzdEwdQhoO5F/WNdI94UEw8g7Enp /languages/markdown.js
sha384-sFh+6oaRBb6kdaMLf8x7qeH7NTvm2u1Ta6PtI0S8hoA+bP7UtHCyKFzaI1JBXwhT /languages/markdown.min.js
sha384-GqxuhQ5X9X3c8nNswtucj7gX9fAuYCtI73NbFLXAYNqX39+zocekxv7SOK6oVGhi /languages/nginx.js
sha384-TG8jUbt29ktiHxVaCkA6FLnJkL/PYG3zQwEYexdbr+Z6mMkFf+c0ONpHyuIY4vvG /languages/nginx.min.js
sha384-QYdE/O+kYLzPISnj43XU2PBSQGgHxlNW3s9e1CfQn3/mdj2U2lygqPmCk6mh24Ib /languages/pgsql.js
sha384-oJqzx2KYttoB62Br3yGkuDMB7q08+JIjBH1jiTmGfz94kIjSpP8WFYdneQESWp3z /languages/pgsql.min.js
sha384-v4qiQbdZu8obdLOFoHrZxA44mmxnjZUelyHe7A6RuqmckxO5weYQVrN8Dx2UpAR1 /languages/plaintext.js
sha384-hE+znpd5xggEBW6IccZoCI0mgFHAfLVuqT/7aW8RakaQ4UJnI058SfIX3lhdGxtE /languages/plaintext.min.js
sha384-/AFMsGSWoas65G5mSpnY9M1vnVP/9qhQW9yGZCpgbuL36JxWKX6MABh2hj6pc4yV /languages/powershell.js
sha384-0u0NM3ve01ej9h9zRzZ/ztDGe1h07d6TStpNoJ4f/50I/vtoCsDHI2PfzDZSYz8q /languages/powershell.min.js
sha384-QtRG6CHajNu8yO49AKRA40c5f+/TgBUmd4fdF1bUJ2M5YrnNowOBcglGip1EuK/E /languages/properties.js
sha384-sgNTtpv5Paw0Ux4jH4t4kp0frMSOTtws8wtoYOeystt+hVEKHDinMYYW/ZR5SKI9 /languages/properties.min.js
sha384-mBGX8CxN3Neyfl/Zf2gq+OUHJ1YA7PWR7YBBRTN+cILYNp7tI0pzwVMcVH1NBns+ /languages/protobuf.js
sha384-S+PDVP8B6WN9X4KJd8TaIK8Sj6BTdd9QAqCRzIYSuwxAQHpcGbZjHNBVrC9qUfrh /languages/protobuf.min.js
sha384-rCXn7K5j/lD2PrSex2XCqyLKap2Ibnsls0uQCx4ZaezI1FJ5RYvoWcsAl/v8SKlE /languages/rust.js
sha384-VTNxHMz2AmpHxzSm8SvRI0As5+wID2j2XJBFtWTic2iEK8WbXgR1fymVQS9S2DvY /languages/rust.min.js
sha384-1MNX8RDXroN7D+Jeq9f6EysUNAuhuQMq32wKcGB5yEDEJalUxEoSjfRVJhF0+YV6 /languages/scss.js
sha384-7CdPzO1jMDolQK+LCRlGiW1Oka6fSiQdIiqfTvHeBk2Hm2iYNoqMn60aJ9HdKkjb /languages/scss.min.js
sha384-KYOeDvyFo8fJObDV1L1aoPnfs6XG68LL6j3INM7McXyRYtBZF7DdUsNjK25dtxKo /languages/shell.js
sha384-olAuUjfRvTi/iEH4RXRpaq/G1iJGizn7OefkyJLQYuqNhh1xAV5dnUrkH/LlPd9j /languages/shell.min.js
sha384-w/OmtgUvmlKWaVatpcvuEQxP7bkJzI5gLeeQkuXjApJNiQvNmXFL2PBM5RWgKqDr /languages/sql.js
sha384-2uzCjI3OPwJce6i2hphsYs1qqTqRrDnfPXbfjZggPWy2/Lgl8gzV9Hyl0jhhoWy4 /languages/sql.min.js
sha384-4q0Mj1AHSvVdgi6nXDGdkiHZQcme/PcCE+MvwCvnAIZSjhJfk3UpjJU2nn2eImWz /languages/typescript.js
sha384-rfwxAwuWzb2XdSU7HN3IhrSyCq96Nj4p1ZYPCNAGbqtnPsaWl8d5eSypxPbW6alT /languages/typescript.min.js
sha384-6IMlY3eILHj9Dec4eMLmEQNsQF49OiTeVVMNIy1A+PxuMdmoeZ2AnVN/7FEpsgAx /languages/vim.js
sha384-vfNnhhcZoO470LVTMwy7VO8IGy2qRDfw+NOnU7pdz/V8y2uNfjq5Ea7Gljj0dZEn /languages/vim.min.js
sha384-7+RHZQJsgiohPfYs4xGnVLR6bKm1cnz7rvB7mXEb2btmiWhSNq1cuTJsQWK9Ut8w /languages/wasm.js
sha384-TTxGby06lDIEB1Y6l2/Hd2VJbewWQSCESXUcDWC24gJN0IiptruI6DE1l5+w4Qzh /languages/wasm.min.js
sha384-QAL2h4IMgQaJUJjUy0dSWdAut7o/A272ai8qOsJ8SSm9KMxkdLgH7oGfLGft/EJ0 /languages/xml.js
sha384-CN3No+n1UZXCFYyl+ge5yAPGTNGuH23BdIsFJxntDmEYL94AmoZlNBHGSdjVSjKG /languages/xml.min.js
sha384-3KIoWvJ5JGRH35WAkzreEebY8sug+ZWeaOPS2r1KIfznEU9TtPFpxX6sIgtaiA9G /languages/yaml.js
sha384-bMkvdnz+wPu1ro0fqO3BaDWztc7RzSvw05MQFP6bhJKDcwpkrFYTfTFI9ndkP11l /languages/yaml.min.js
sha384-sTqaV7fo3E6PQv9UtxAmky9uUJL26mnfrEuf6yYrzUJqUE2/3bWnsMLwaFl3odSH /highlight.js
sha384-l1yOhFl9sdVRCc3BFEb7OKul3PoGhtKRdCyGYBmsuv1mqrioqPC0zvJEg6NzJE7a /highlight.min.js
```

