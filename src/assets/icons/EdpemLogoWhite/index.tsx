import { styled } from '@mui/material';
import { EdpemLogoWhiteInputProps } from './types';

const StyledSvg = styled('svg')<EdpemLogoWhiteInputProps>`
  ${({ marginLeft }) => marginLeft && { marginLeft }}
  ${({ minWidth }) => minWidth && { minWidth, width: minWidth }}
  ${({ minHeight }) => minHeight && { minHeight }}
`;

export const EdpemLogoWhite: React.FC<EdpemLogoWhiteInputProps> = ({
  minWidth,
  minHeight,
  marginLeft,
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    minWidth={minWidth}
    minHeight={minHeight}
    marginLeft={marginLeft}
    viewBox="0 0 304.846 78.409"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_752"
          data-name="Rectangle 752"
          width="44.582"
          height="49.932"
          transform="translate(0 0)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
        />
      </clipPath>
    </defs>
    <g id="Group_856" data-name="Group 856" transform="translate(-306.078 -132)">
      <g
        id="Mask_Group_4"
        data-name="Mask Group 4"
        transform="translate(306.078 142.644)"
        clip-path="url(#clip-path)"
      >
        <image
          id="Image_3"
          data-name="Image 3"
          width="249.66"
          height="60.119"
          transform="translate(0 -10.7)"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAABICAYAAACus9P0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABK6ADAAQAAAABAAAASAAAAABfHPyEAAAhGklEQVR4Ae2dC5gU1ZWAp2eGYRgQjbJqWFCQgBJWo2LMmmjEYMY4CsEEDV8kOklEVBISwcRVQyIG85lE8YGrq/G5koirn/CFBMRgSKKykuCKRnyhjk98ITPDzPQ8mJne/0z1paur69a7unugi2+oqnvPPa977rnnnrpdVVZWOkoayKMGOjs7700FOHbu3Nntlc2urq7rdSTAc7lXPMUM19ra+pZORspri5n3oLyVB21YalfSQBAN9Pb2VgRpV2qTo4GenJLdvKDkrHbzDi428crLy/e4QRZTHyRiwlu0aEvOqmi7ZvdkrBRZRdavqcgw9RNEJWfVTzpqd2GzFFntLj2ZfzlKzir/Oi9RLGkgCg2UloFRaLGEo6SBkgZi10BpGRi7iksE9mgNlHJWe3T3hxK+tAwMpb5SY78aKOWs/GqsBK80UHJWShOlc0kDJQ0UtQYqi5q7EnMlDZQ0YKuBwYMHz6GixqayO5FIPGpT3u+LSs6q33dhSYA9UQM4pFV7mtylZeCe1uMFlreUYC9wB/Rj8iVn1Y87rz+yXkqw98deKw6eS86qOPqhxEVJAyUNuGig5KxcFFSqLmmgpIHi0EDJWRVHP5S4KGmgpAEXDVS2nPL122XffqKstyxVVs65jLMcvfwZvkzV9RWn/zPg0jA1A1v3mjVrcaLupHfMMKXrkgZKGihpICoNVJYPqOjqevTPs8q6uqpSuKlEn7vKRS91xmH8ftJwVgo+Vdb0x0fntC++pbb64guf4LHqHvHOIt7IOI2nW+O6u7sn8AbKYysrK0cNHDiwOld7mRLeYgnozneBfbqiouJZzg3oa2kGovBXyDUFucYi12fg9YvINBI+tS/N6+joaAb+n8A8WVVVtQl5lhVeinAcoIPpyH94T0/PEfwdjw72o78M47dB3d7e3kabLQMGDHgCuBd5kPAqetgt9zshZx39PQq9jBe7Rx2H1dTUDLVRy64i7L4T2LdEP9jJFvTzIvpZsQvAy0WqoaG6tf7CS7dXfmJnY9nQlPxtL9srfZZro0zVNVKnytRZ1TUNHdHc9sPLv4MwA7zQ7q8wdNLstra2x5PJ5A5kDXUw0NvBtR6cFxVaHwhSx6B7AH4+CiqUDFqODQz08+zkKfbXGiP3TPinb9tbg+pA2vHa4QYG6LVc1tnpIWwZeryrpaXlNesfvK+H5uSw+O3ag7cWe/0Nsr3DdaijrS3ZyPhZAZIz7Whpy2hQmfzJz6c37TOi0XBWhpMSpyUOSTkl49pwZMpBqbOCbar+l/YdsrTECWoJ9sMKdFQrTsrl3dchO9AY5CCJxdh0aodeHQNrCQOgI5QAlsYy6CmaYaZbrM4KPqfjaB+xiBD6ViY07GYuiCJ9L7o4QwfmIqUFnT77SEePDmSDVeEAH6LldLOdOF4DnOhc9vD45lETGjIOy+qsch1VtiNTkdnQVMuxkx5JrVkz0pFoP6mUKAHjeC5YV/hvhYGvpdXUfKhHIjpke8U/l95apJe9C5QsxeaskGIyy5OFUTtqq3Zw3Bspm6n0EPacL2eFfcyDVuhIyqoP673on79rKPc+UbcvXz1qxxHHrjccVmY5qByYiqTszlmRV/k+Pc2HHPlKx0Mrx4btmEK2x5AXyYCzKjfuewxkKzTq45RdBil/3XHLIvjFEEUWzkX1dRtm9VvzIb/QwGE165bHfvsZ+3jDge9IIiuJtslN9TrQibyK/ngQpLb85/w2cNAZp76R2rr15LY5lyzqImmeIvGeILluPDE0rlQS3kjIi5pV3tFIuPel4nt7yntef21sR/35/5f86aJzBi28YiUJNc+fU/LbeVHDo7A6IpyrSAZOjBq3F3z8UPWTwN2NMxlOUvIXXtp4hUG2yRjil5HtUq9twsKReL8UmpXM1NpEfVgaftuL44Svc9za4WB64L0JuDdIDH+o4NFjFWP5IPrnIPAMVOW6syShwXUbfTqSNj/TwXksV0+8PIJ7B0OuaTiN8+HxVK+t0GUHfbsN/fzT3Ab9YMeJUYMGVe/N+FeOwgySdc2DjOmMu9HwUAa4twcUqc2bq5IX/OB7jUM+2WIXRenKVHJe1Uu01VS9f3vbOedfLjizOCvSGxRVxyz4DOeCHzKzYdyLolSVzJiFEIyB2oteNwShLRGgVx0gn+t3A910IPRkOS66h1/HJDn1k2U5nUx2LPeS1xE9CLxXeezg4loGiqzg3uylj+jL9yXfhCyzRQd2fKoy6qei82tbW9ue94IbPa52w6lw950Brmi/7saTGvcZ2Wgk0DNPAsUZWR1TdpksIQU+3aZy351tp591c+qll/bKIlJkN8g8hc7a5EWh+YRh0ETycU4ZJPnkOypaETqrBehgruDT8SYDBYdi+zTTzVzBeSYDeLkOtyoHpj0oDeEhDmcFb5O98I7T2Zl29lPc9GGth0bfgyocnesTZ6Fhbe96L3mnHYcdvamxfO8eFTEFPe84bOKmjuWrxsC0a0joyljEAKJIjCC2ZDP4wx71YUSG+AwGaU9YJgrRPkJntYg+lnxgzkEkJU/uQkU8qn8ED/gctz+kB2ygBynIEHnOyks+MR0ZT1NyBj2jfEmzrMvpBFOBrCq49f9QIrX2qQNaj5v8B6uTUk8DVbk52rLWKRh54th1131Hw0hROSwJaU26KrpLDFQ+Ge57NhODol0thlYUS9sgio3KWTFAVtrRRzdvU+5/YDiMVvDVg/d9O3qqTGzOAYW2CltoUDhszrYJai0yKsS5yvLUBteuIiLOVdz4xq2jK7jQj2xv0R7i0HTtHctTW7YMbJtRf1VTzf5thuPJLPUy95l9Wco55Z73SjWRC2uff8W34LIoNpDKelqrsQAVMrgwqA8kh5GeIQJgyW0ig82xkzSVUcsnnIlc8LMDg/sY/LE+MY3KWQkeq1bTDiWyQWjuAmjJRlvZ3e50+HaSUUZWMCZO42MnBpFhGfWOeSmz3F6vwSn5YZkonI56r/iy4MA4IHnplTNkt3quE7LudtffG1HXXqm+xPvWrTVZRPJ8g0xT5GmGk7bc6qSzZb0vMxSwOYZP2QxZg2NkUSwzszZaelEXxpZ0k8FLPfxvRs5b7fIttJ+GM1iIA1uLPru84PMKE5WzstJLD1J/u6i9KNwEg03Mg3/t8hudStI5x2ZMKHIuadNglcV07wsXdql9ICE4pT9zGIiwQMaM04ROH60JTA7+K5JLbv1C474HfSxOJ5N8V/uyMufsZaGKxIzoq6+OxHvLpFPvTz333CcCMxSyoTgZU0f7vqSzb6CRp9wDcJJgnBvGOdJ5j/sRmYGywLdQlgbi7MQRCf9eaAMnS6DIlp1xOStxJF7kCQuD/h6wqDTr1i8fUTkrmJiCM9Lm1uhDSYSHzlG56U9sOkshphv5aU5oHlKr1o1oPuaEP8lTPxVlmfNUhqPK1NnBqLLm4Ye+27Hs4XEwldfX1kBvpkkvvi4xGEnU+g7hpeNoNz3d3hdNBSyzkZsBpOlIiN+s2gU5w6dEg56clJUnBulvg9C0tonDWckkZeU3zvv0wLeK1nfvN3qhTxpsERmFnvuK/pHlnfbwamdh9QYDU7RMUAEfPw5Loyy1cePeLcfXPqycjjqriErOuddmB6au90qJw2KrxGR4y1viXYzESUm6Ogy9nbpQywfa1+vwu5Vj+Bu8dB6dfJkbLqd66EiCONTMGlTHZr6idlbpZYf336N5UbYLjFNfiHzIW+eCYlc1zkoetugOT86KxlPo3206JNT5iuB3MRfwApm0P2ljvN0SOopJHHNM85D7bvvmwFn18xNDBrcqPmWXu2yxlbPa8S51xrXaE2+UyP+y971363vDOxZc/fvknHkXosCc3fUCF+UBjZm8zuP4IDjZ3XsVO2wfDNJWtaH9PSwH71D3fs7sPj9K+HdrwxL1BDcYXT1td7Kj+CfwuUIH46V80KBBizH8l7zA5gsG4/8jcgV6EheUR3Z3P4vj3mbXnv6swIEeZlenKQv9GibojWZX/X4a/GXU/UpXF0c5tqZ9tRCOfmJoZyVMJ0aP7hh0+403Vl82/6yyYZ/Ypt59JeGRXKt7JaDcKwdmrStLdtR03X7Pja2nTV8iUZtqE8eZ2Wyil59JWGljcP+L4f3dWh7kng76I6F4i9+28D0A/o9xaoczm8pfIGcseBnMtzGIAjlTM1/gWcXPh642lxXyGp2k0PvqfPMgekCf2k9o4UC/kU+eoHeajh42Lu+lC/TkWYfTrRzdvKWLoOFlfCTOSpgAWc/Ay+evGfyLK+sqDjzgfcWYOCzlmDJru0xkpeoUfN+5u6ey+5G157fMunhFnIl3IoevZNH1eIOjWI28j3kEdwQDzwr+nnAE0lTC/5c1Vap4KFFNoF8MyJ4bosfIjBUZlzIAInHwSrigZyaHD5lsbg3aPkw7BuTTuvbUfUZXF0c5OtBOZGLjcdB0wik2QgT1J+xku/WPKPB1p7aB6yQi2nHEceu38+YFtUXBeGqY2YOVScRLzkr95W51aD5w3Htdv7lnIpNhZI5VBAOf5MZ8HyhRnpx4zi14USIdFPgnME74cWbylDLQwfL0XifcQepku0MgZmikm3Ht+EBux0fxyHaXXbt8lZGbsd1BL7oRW/DCR9gEO6S0+VKW7PIEMFIb9yKTG0ykDkARkzzWXv9z9ylVp33l5rLKim4jdyW1svwzDnWWuEv+zD8hNxaOxv+97793YPKyhY+0/+zqr6LAyPjFU38qzYqvEzxsYQbQhvK+kKWBmeFeDbIUlObwo81bMcC1M6cbn8zyz7rB+K0nP7gtqJx+aTnBEzX82ak+7jr08JyOBs7K6yuVMkNIh8yhHIctryPWHS9FbeM6Qn7KIxv8VqKJww5rGXzNgh8NnHP+ReU1g5KZPJVyS+pstDQvB+Va/etzZNs+HtZ17ZKlbeddMC+qN5Ay+37RyrOXewztNS9wfmAwjEdxOq/4aaNgkeNL6tp6Bu84a5mXe17p24QDjTzshh95jW3k+vMikxkGPpaa7/N97eQsmURH5YMfnOLhOjrw91ddXSHLY33ilpgwQXYx39E5/JNvdCz5r7tS72wdoWIrcUbKgclZDikzUvLGVV9h+r9Usr2m6877f5167a2J5LEuShxxRKO53u81nfV5v20EnnYnEoL3ORaMXs1ufYwja7YHThMArJyqXid6OMGRTvW6OpZWR+nqguarYHUrPId6AqjjCScoujtSVx93OZFdU9w03PCjg006GPpzjK7OUm5raxYYp1ttBEdUXRS5RSvzsTorIYbRyxh+rGzMmC91XvTDJ3o//Gh/xYRySepslGffKVg5i0fo/suTM1rOnXNg8rHHZtZMnvyuud7PNQajfWTrhIfHucOol79iOUbYMYLOp9mVeylDN+95gQsCA+6GIO2iaoNeAkWwUdEXPIwJiaRtUVLn9ZccaqK0xeNWCJ0aOxjJDRJZ/d6urtBlsS0DzYKhmN7q6VO2DF31wLjKSV9YVlZZ2S31KqKSs3SduldtVZkqN+BSZT3PbJrUdeZ3nuPTXyfS6YFk4EmXbWcp2v3lTEQ2xI5XlhMH2JV7KWNmfd4LXBAYcH8YpF1UbdDX1qhwhcHD8r1T096rXdp7Ow1SazF6qLKWyT18bbcrL4ayQAM9KON9G0h/d+d3B5z7zctE02pqULGUOiv8Ui9l8s+AVxDcb2/ct+OnP/9D+4JFX8Nh+YoQgdcmpRXt/nLG6AbY8YqzChQ5Ci4ml1Y7nFGUEVl9yFI61EALwwf03wzTPqq2LPdsl6M488FR0XDCw2Rt66xo84FTu0LW5dVZiaCJ4cOTg+9YcsPAH37vu4nqQR1GPCW2m22/KopSZ3FcmQhLMHG0tg3pWnzzva3f+PZCeX2NUej+PwN5X4yiwh2y+CFwVuUM/ousnOKQ5R3ugQ4GdGzRB46woMlt6Bc0snPrEPiL3S4bGhr20fEB/R5dXaHL8+6sRGAU0l3zta+sTnxqNI9wVeyk4ixDJZlSFU0ZkOp/pThJvPf+5a/ndW3YME6VuZ1xVrZLJ7d2xViPLkVxOTv9kTGw0ePouopR1t2JJ/qnLaQ82QMmJDLVnElcu61CwRTqXBBnlVq37sDWC+b/ofeFl49xE9yIt4y4KhOFZVolxhzycvXiX55cdfbZseVZMtRKV1FogMgtCjR7Oo7spcgeoI28Wg0zdkX7Tbec0PytC//R/cLLR5f19u6ib2g+V/+Z6UOujHirr1/YbFp57NFr9v7tg8cOnHnWPwkwchtrOpDBEltORkMy78XkJF4NShRd6vIZQVFmtSOqyLrfE2+wwbzkpvzqllzaEX7b5AveV2I6DFPiqDouvuLcjjvuvlFyTUaOKtsViTMyH+J9VIn5OlFd3THga6dfU3PF/OsSE8b6djwYynY6pWd3yVuhJrsnS4GXGeTAtHtwzP0T5Bq9n1fIyAo73LV1Jgj/UbWBD2XaWSgpjz1nNHr06CbdhCHjNIuhIrrJi7NKvf32oLbzvj+n675lVye6Opm1Mz+vse2xtILMdeo6RURVfdF5F1Zfd/VviQB2BtEl7Zayn+SeIG353dQLDLbY9iH55YkE+7vsi9libScO2Vrm9R5nFduAFmeB/lV3emUpMjic5cGRIQuBiMg3J88o6OAv8CTjhx3svwu7yXkohd0E2pzsh3ZQ2NidVerJJ/dvOe2sFT3PbT7OsNDMNgQnps2RlMDJfcWokW8MuvySs6rO//Y/yhb/wqm5ax2d1RHkMTEd/Gf+vu9KoMAA+AP5DHcgLph1Rwdq6KERjnAkevcAGQ8Iso2JB7M/rHaOIo0h6Q9TMGicYqcdDzjRocEwxt9qV84oalIMlIR8H3DH7HkrxVFl49cNokx5Zuo1ysrHHPzy0NsWf3HArPqN2biC3cFfoJ/rYOy2O8aDcRFvK36sytYQ/we6GeW/lbcW4D7YG2Q8UMUQOaCDWp10Qe1Sh09XDp1muzomEvlp2FS7ukKXxTLFIWx5569unNz+6+t/l9q2fVhm84E4HnFDKrrKiC97qAw4BWPUpaoGdlVNOn7p4F/+bH7iqKNsN9JlsHi/IvLYBLRvx8OM5Odtjt4ZigGSKEbeznmkX9TV1dUH0nY2S8zb/LZ1g0d/h7rBxFnP7yW1e4zipGvGzYR3JE7TXLTrGmfx2q6bGC+w/zdBb7vkY9VxEnUF+8kN/kM2bef4ppyCsPqRzZkdl/5kevu1N/93ou9pn4qRMu5IlZhpZRxaxpGl+FnOwNn1c2vmzr4nMXasXRLZjMLXNW+KXEeD0301ApgBfBDKrKWzH/XbNt/w8PoPaPp2VrRLYLD/FjW/6E2+CH1Q1Hj94pPBQP8t9dsuKngi3lqcpi06nNgbthURF+IUnwTl8XZo6aPP25Xno4yf+9zARDlXbNBKz969W6E83oujav3efyzpvOk3dyR65Td74oIkUpIjcy0lajd6X1XfvboyYq8yXiszaO4Fs2pu+vUdUTsqoYRRBNqXRdRRw8z4qQy3xXtF/kGix0AHBhvqYxh2RImqxsJT5BOkHS2nMl7n63uScsIXoG6irg12uVlXF2U5+SptOgVHPh6HPi1Kel5x4ajG2TkqaR+Z4fAWhH/dcdqMNb2vbJkgiA1nJM7RcFLGq2EMZyn/q1fFGKnztIMCVo4E+anqqxdOHfiNM+RFd8rb9dVF9Z9ERjzZ+9jphfk6Wnh/MfZbdPVBy8F7rZ9ZDRmS8H+yjh6GvxWctolUXRtVDt4Dol4KwsucQibXlWxMNpMKFR1L1EC/2C5F5cWE6P0OxWecZ2znId5620aEl7PfS14t1NXVfQz0V8TJgx1u9GMbCFAejR/ouv3uzzaNOfwl8/cDM5/kUq8y1r+6WMHKufmYE/+UWrPGdi1tJ1yYMowj0DftJHEd9cwjg4c/XweOrcdNfhxy4A+N0lY+613nRsNLPcb2Y1/CWYCRtdsLHYHBKTq+1lhQw888r/iihMPmtN/pw3ms9UqLd6q9YVGR+VabwDfjh5dV5kbma/p+vRk2H9fQn5EeW2ZW+q7FFkMtA8FS2fHLG76cvGTB2tRrbx6qXF/2Ei8TQ6n4SQQ3YOT/dKuqqq4BZ5x+/dA7b5qWOOWUt/OhHELhv4km/NKSR74o9Vy/7XTwsFCLof5cV68rZwCv09WpcpZdf1XXfs/M8iOQcxb8Tfbb1gxP+6ksvX5kLiv0NQ5NG5HGxRt6mEJUp9UledS8JrWx40d0stL3xwm/uvo4ykkTHCJjyw430ejf7Mo9lcnrhdvOOf/ypur92zORkfpgqfXDD7pyA65p6Ijm5KyLf4ByKjwRjwgIeglmqE2cAx04i4VhWYFwHbPGhiAMEB3kvG3Byg94p+tmK680GdhLrHi93kNjMvJt9EpLBxd1ZMXA6IXWdK9yRAGHDIt08tFH8lZdTxGR8BL2gxGCA3p14HlHxxP99rjA5euAnnxQ1/aQyDwQH6lnnx284+Sp98rXazKOyljuqa8vm8udrpv2GdmY/gpzZPkzP0JhQAtsteOhUAyegXytH3pmWEjUYizar9A6sZA2Vk9LNFleOOHyUidyAqeNCsxyqWvg5dP1a7zgd4OJ2lkJPVkGKV7jPkOuFnpNOjn9LAGFV/o/9DJQ8OAk79XxJOWBnYQg93FAZ66Oj7a2ZCN1/vZ+0SDR8dDKsc3jJj5vOKDsiEl9Xsv47FZ2ncAb9fI5eSIqHF3zuKOeb1++epQPmWIBpeNf1CnKSzntN6WV7cl5gHM6y6LbcQA7veC3gxEn61UZtK+zw+G3DDmfpU29G11gatHHZTgq+aRTJEcczkoYA2/o6NiDPibT3w/pFCGyoa/ZbnjM9fRFgw4f5Z4jNGCn8IEQ+byc7UEfNlMR+ZNhsyzgn+pkKzj5pWZ412sQlsv3+5qHH/pubqSU65isMMqR9ZXjqFqOr31YforjSjgPAMg2k7/QBwb0Dka5nNnqGqIu+UZe3zKD8zS5xzldT6c8njaAwPTShuoryhG6gQmaGoqDBdcznGU/jHzvUL76LN9gnCkOW2Zq+HvF1CSSy7icFf3VLrzHaWboxfHhgvSNX/pROSuhKw7bqZPgb4Nf/vzAJ5Mdy3X0pd+p876NAuDK5KVXzmja9+CPs52QnZOyK1NRFRFV1X6drWd8c7GfN3v6ETwoLN77AZ3CwpSTUJXcSNRHvV85xVmm8yJR85KKScYsPqNwVuDoyUKavmHgf8Cl52jEj+7BKxthZcA5Hb4jlyidFYxJXlGbLxLGGR/yFNPXBOlFT+jGMQ3DZPKgFzx9MKmtW2vEuWQ7KWsC3eM9zi7500VnIHSFZwbyBAhPkmzczLmoD1lOBFUJ0dCSohbOgbkonJUMSPrYdslP+VZx6EF1a9cuHWlK4lx70J+327V1K4PfSHJWio5EyTpnrpiXCJDrSJw6eCbLSkPhtjuno15vuarUhg37tUw69X7JL+mcVdbyri8vlYmszHVNw0Z/JPuxYCrUdgml3DjO8HamLHPsFFcMZRhoA3x46zwbBdFWEvpF75DtdB2Vs2JQzrPDL2USecqSzUZ1vosEj5st0RdvQTbQ9oC0LehECeRQ4PcGHUJVDl1Z4od+iirpAoVTdxZ+XBVP43JJpDeNOOxt44mfvQPSObCschzdjqNOWCcbPcFrbFF35aBwADLDoEjZ9FlUB0+LdsCQ97W7RoWCA1zydKVfHVE5K4SeSv/e5SS85GjEDoDxveyhzUyWTNrNloouNCRxPUPTTa7FcTgrISqRu+JRd5Zlf1qHvpwW+OTBy49deO8ji37kKbKz/gGo6LjmhlOa9x/zQZbTkSd4pr9M1CSOzHBmmbIMbMspX7899dSWoa7aLyIAFDo37Rz6FFfo/9KGHVkSWJY7hXJY0F3uFnHY6TsqZyVmBn7ZUrHejo65jEG1CV5l6VzvZJ7UT4G/hci2Vvg047C7Rv+9YZecLgM+UGSldOPF2YpcMkbEqSDz5dxqn4RTNw09Xg/PtktwwWU+wLmFe2cZAKho+/4lsxuHDm+W/VLmPVPiiOyckXJgOfVVwzpl06i8JdSpo4u1Dl3UF2pAZ3dcsjGsYdvpGBoz8x1BYoTPQLcuCN0onVV6UE5xGfDmbpAEcxL4d5Bhgwxm/lZzv5n7j+HNNnGfhSB9I7LL4LbrEz9lLrw7D3QXQtJHRFjaJ3R2cokDRhcfiU5EP1yv4fpF0Y/U2bWxK6ONLDOdVxCpjRv3bq2ddmdj+d6m/JSKmLIdlzgo5ciMc/YyUfJT7df950kQLfpln1O/wb9s5NP+lstO2VGW0dGys905FHYSwKUO3FPFoKLkWYcrLUvfICoGZyWqgVf59UAkWzp0cpvLofU2976WTroupN8azLgt16GclaKJU10UpK8svHi+NduI4iHnnFr71AHyA2KnRLqKoNzOzaMmNHTddd/RcNivHZVZSTITuhiH5w7xAkinfSSGAmwkRmeWxXoNjbq4HTIR6kro7JotgwwA9NFt5V13L0sOOz2j1/etbUR+4G/wM/vb4XYrQ8ePABMomW7lWe5d7DEyu5GoHlrPu8kXpl5yYOhHXirgPDF33vu7I5pHjn9TOSG1nFORk1GuIiwjF2WOpnbByUbPYyc9klq3cRhEdxtHpQwFmSQ5eBEdJ09wYjlk2cmglA162vW/4ifqMzRl2bsuSsFEHkmogjPLCIvJWSk9wuNM+F0bpfyCS5yKDHgus3Sg6AY958tZCX/wXisTtkyiIlOUB3LI02lP+dhEy6c/+3TPjpasneRqb4F83U2uzWdhXg5VLte8G6d3wOcm3j/opl9dJZ+Hl7Ld+RDjYzY+DSUfx6/Eh/GOpoqg8jJAttP2BV7qt5yXji0OiieqdmI48PQtevXYmhr/rwAWR4R+XuedSEv5pfzfsY3HrLwxi64CxtfrjdFNA28C8PSmBJlUkGG+lS799BR8nW0tN9+L/ORrzub878DuY67zei37gwgWNtGnS+H7Fq/t/MCh57uwwROtbdD5B+hpgZ3erbBB7nFaC6D7VeiMlxdRBsGBfpLo9++8ZWIZ+vH86uxEav36fYMQzGozZEiq7PDDW1FQoE9jZeHqZzfpWXMkxjmK60NgX765x5tZBgxVb8WkXJ7+tAAjWyI+pIP4nFdlA+/mf49Ob0BvK4tNbPicBr+HMPCHY6Cfg79R/NWY5RKjE5kob0COl3EGr/L3IvIso6xfH8g/FdkmIPtIdCDvTP+0yE7fZa0aqJP9WbIV5H3qNwAnOnh9d9CBUwci7wxsejw6EruXF26OZuLeB9lVrLOrORPHNl7E9AEviX06bSfyUk3vO9PTmP4fv2jUCacoFhoAAAAASUVORK5CYII="
        />
      </g>
      <g id="Group_679" data-name="Group 679" transform="translate(357.887 132)">
        <path
          id="Path_2313"
          data-name="Path 2313"
          d="M75.586,79.688q-.45,4.006-4.169,8.133-5.781,6.566-16.182,6.567a22.819,22.819,0,0,1-15.157-5.534q-6.562-5.529-6.564-18,0-11.684,5.926-17.917T54.818,46.7A23.558,23.558,0,0,1,64.933,48.8a17.713,17.713,0,0,1,7.437,6.648,22.708,22.708,0,0,1,3.423,9.288,60.129,60.129,0,0,1,.374,8.92h-30.8q.246,6.772,4.252,9.5a9.979,9.979,0,0,0,5.864,1.693,8.432,8.432,0,0,0,5.9-2.063,9.852,9.852,0,0,0,2.187-3.1ZM63.942,65.9q-.289-4.666-2.826-7.081a8.779,8.779,0,0,0-6.3-2.417,7.993,7.993,0,0,0-6.339,2.561A12.751,12.751,0,0,0,45.653,65.9Z"
          transform="translate(-33.514 -32.122)"
          fill="#fff"
        />
        <path
          id="Path_2314"
          data-name="Path 2314"
          d="M99.116,40.034v60.779H87.678V94.577A16.6,16.6,0,0,1,81.94,100.4a16.121,16.121,0,0,1-8.012,1.816,16.728,16.728,0,0,1-13.275-6.378q-5.388-6.378-5.388-16.373,0-11.517,5.307-18.125a17.261,17.261,0,0,1,14.181-6.608,14.509,14.509,0,0,1,7.269,1.8,14.29,14.29,0,0,1,5.162,4.976V40.034ZM67.405,78.6q0,6.234,2.476,9.951a8.245,8.245,0,0,0,7.433,3.758,8.683,8.683,0,0,0,7.6-3.716,16.408,16.408,0,0,0,2.6-9.62q0-8.259-4.169-11.81A8.978,8.978,0,0,0,77.4,65.014q-5.161,0-7.575,3.9A18.075,18.075,0,0,0,67.405,78.6"
          transform="translate(-7.685 -40.034)"
          fill="#fff"
        />
        <path
          id="Path_2315"
          data-name="Path 2315"
          d="M79.575,48.392h7.267v5.862a18.139,18.139,0,0,1,4.882-4.666,15.765,15.765,0,0,1,8.861-2.476,16.684,16.684,0,0,1,12.792,5.759q5.256,5.762,5.256,16.456,0,14.45-7.586,20.645a17.179,17.179,0,0,1-11.191,3.922,15.236,15.236,0,0,1-8.415-2.187,19.332,19.332,0,0,1-4.436-4.255v22.585H79.575Zm27.962,34.664q3.458-4.357,3.458-13.028a24.243,24.243,0,0,0-1.531-9.082q-2.9-7.31-10.609-7.31-7.747,0-10.6,7.722a30.525,30.525,0,0,0-1.533,10.489,22.171,22.171,0,0,0,1.533,8.712q2.9,6.854,10.6,6.853a10.651,10.651,0,0,0,8.682-4.355"
          transform="translate(21.178 -31.629)"
          fill="#fff"
        />
        <path
          id="Path_2316"
          data-name="Path 2316"
          d="M129.75,49.36a16.739,16.739,0,0,1,6.689,5.718,19.733,19.733,0,0,1,2.953,7.8,51.2,51.2,0,0,1,.658,9.747H107.885q.207,6.749,3.154,10.826t9.137,4.08a11.741,11.741,0,0,0,9.218-3.859,13.1,13.1,0,0,0,2.728-5.182h7.31a15.4,15.4,0,0,1-1.921,5.427,19.547,19.547,0,0,1-3.638,4.893,17.176,17.176,0,0,1-8.321,4.462,25.231,25.231,0,0,1-6.024.656,18.456,18.456,0,0,1-13.91-6q-5.7-6.011-5.7-16.828,0-10.651,5.746-17.3a18.9,18.9,0,0,1,15.019-6.648,19.94,19.94,0,0,1,9.069,2.211m2.662,17.361A19.406,19.406,0,0,0,130.323,59q-3.032-5.371-10.112-5.368a11.158,11.158,0,0,0-8.518,3.7,14.027,14.027,0,0,0-3.644,9.391Z"
          transform="translate(45.335 -31.586)"
          fill="#fff"
        />
        <path
          id="Path_2317"
          data-name="Path 2317"
          d="M121.993,48.141h7.348v6.276a24.777,24.777,0,0,1,4.79-4.749,14.414,14.414,0,0,1,8.341-2.518,13.124,13.124,0,0,1,8.507,2.6,13.583,13.583,0,0,1,3.3,4.377,15.4,15.4,0,0,1,13.337-6.978q8.918,0,12.14,6.442a21.042,21.042,0,0,1,1.732,9.331v29.44h-7.719V61.644q0-4.42-2.209-6.07a8.755,8.755,0,0,0-5.39-1.652,10.692,10.692,0,0,0-7.536,2.931q-3.156,2.93-3.156,9.786V92.364h-7.558V63.5q0-4.5-1.074-6.564-1.693-3.1-6.317-3.1a10.894,10.894,0,0,0-7.658,3.261q-3.448,3.261-3.45,11.81V92.364h-7.431Z"
          transform="translate(71.547 -31.584)"
          fill="#fff"
        />
      </g>
    </g>
  </StyledSvg>
);
