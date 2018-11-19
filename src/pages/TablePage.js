import React from "react";
import "../components/reset";

export default function FormPage() {
  return (
    <div style={{padding:'15px', background:"#f7f7f7"}}>

      <div className="table-responsive">
      <table className="table table--striped">
      <caption>
        Oversikt over timer brukt p&aring; produkter i hver fagseksjon og omfanget av samarbeidet p&aring; tvers av fagseksjonene i 2016.
        <span>Tabell med striper og to rader i thead. Tabellen er i en div som gjør den «responsiv» (som i at den scroller på små skjermer).</span>
      </caption>
      <thead>
      <tr>
      <th style={{textAlign: "left"}} rowSpan="2">Produkter</th>
      <th style={{textAlign: "right"}} colSpan="6">
      <p style={{textAlign: "center"}}>Koststed &ndash; fagseksjoner</p>
      </th>
      <th style={{textAlign: "right"}} rowSpan="2">Sum timer per produkt</th>
      <th style={{textAlign: "right"}} rowSpan="2">Andel timer per prod</th>
      </tr>
      <tr>
      <th style={{textAlign: "right"}}>Regelverk</th>
      <th style={{textAlign: "right"}}>Metode</th>
      <th style={{textAlign: "right"}}>Analyse</th>
      <th style={{textAlign: "right"}}>Kurs</th>
      <th style={{textAlign: "right"}}>R&aring;dgivning</th>
      <th style={{textAlign: "right"}}>Milj&oslash;avtrykks&shy;portal</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td >Regelverksforvaltning</td>
      <td style={{textAlign: "right"}}>2067</td>
      <td style={{textAlign: "right"}}>303</td>
      <td style={{textAlign: "right"}}>45</td>
      <td style={{textAlign: "right"}}>188</td>
      <td style={{textAlign: "right"}}>96</td>
      <td style={{textAlign: "right"}}>61</td>
      <td style={{textAlign: "right"}}>2759</td>
      <td style={{textAlign: "right"}}>5 %</td>
      </tr>
      <tr>
      <td >Metodeverk og veiledningsmateriell</td>
      <td style={{textAlign: "right"}}>313</td>
      <td style={{textAlign: "right"}}>9624</td>
      <td style={{textAlign: "right"}}>1266</td>
      <td style={{textAlign: "right"}}>1049</td>
      <td style={{textAlign: "right"}}>32</td>
      <td style={{textAlign: "right"}}>180</td>
      <td style={{textAlign: "right"}}>12464</td>
      <td style={{textAlign: "right"}}>22 %</td>
      </tr>
      <tr>
      <td >Analyser og utredninger</td>
      <td style={{textAlign: "right"}}>420</td>
      <td style={{textAlign: "right"}}>4122</td>
      <td style={{textAlign: "right"}}>6856</td>
      <td style={{textAlign: "right"}}>279</td>
      <td style={{textAlign: "right"}}>233</td>
      <td style={{textAlign: "right"}}>345</td>
      <td style={{textAlign: "right"}}>12255</td>
      <td style={{textAlign: "right"}}>21 %</td>
      </tr>
      <tr>
      <td >Kurs</td>
      <td style={{textAlign: "right"}}>30</td>
      <td style={{textAlign: "right"}}>33</td>
      <td style={{textAlign: "right"}}>33</td>
      <td style={{textAlign: "right"}}>709</td>
      <td style={{textAlign: "right"}}>36</td>
      <td style={{textAlign: "right"}}>0</td>
      <td style={{textAlign: "right"}}>841</td>
      <td style={{textAlign: "right"}}>1 %</td>
      </tr>
      <tr>
      <td >R&aring;dgivning</td>
      <td style={{textAlign: "right"}}>472</td>
      <td style={{textAlign: "right"}}>1190</td>
      <td style={{textAlign: "right"}}>1634</td>
      <td style={{textAlign: "right"}}>3712</td>
      <td style={{textAlign: "right"}}>15950</td>
      <td style={{textAlign: "right"}}>0</td>
      <td style={{textAlign: "right"}}>22958</td>
      <td style={{textAlign: "right"}}>40 %</td>
      </tr>
      <tr>
      <td >Milj&oslash;avtrykksportal</td>
      <td style={{textAlign: "right"}}>50</td>
      <td style={{textAlign: "right"}}>88</td>
      <td style={{textAlign: "right"}}>300</td>
      <td style={{textAlign: "right"}}>32</td>
      <td style={{textAlign: "right"}}>166</td>
      <td style={{textAlign: "right"}}>5584</td>
      <td style={{textAlign: "right"}}>6220</td>
      <td style={{textAlign: "right"}}>11 %</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
      <th style={{textAlign: "left"}}>Sum timer</th>
      <th style={{textAlign: "right"}}>3352</th>
      <th style={{textAlign: "right"}}>15360</th>
      <th style={{textAlign: "right"}}>10134</th>
      <th style={{textAlign: "right"}}>5969</th>
      <th style={{textAlign: "right"}}>16513</th>
      <th style={{textAlign: "right"}}>6170</th>
      <th style={{textAlign: "right"}}>57497</th>
      <th style={{textAlign: "right"}}>100 %</th>
      </tr>
      </tfoot>
      </table>
      </div>

      <br/><br/>

      <table className="table table--tight table--border-bottom">
      <caption>Resultatregnskap. <span>Tabell med mindre luft, ramme i bunn og en uthevet kolonne.</span></caption>
      <thead>
      <tr>
      <th style={{textAlign: "left"}}>&nbsp;</th>
      <th style={{textAlign: "center"}}>Note</th>
      <th style={{textAlign: "right", backgroundColor: "#efefef"}}>31.12.2015</th>
      <th style={{textAlign: "right"}}>31.12.2014</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><strong>Driftsinntekter</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td>&nbsp; Inntekt fra bevilgninger</td>
      <td style={{textAlign: "center"}}>1</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>407 832 591</td>
      <td style={{textAlign: "right"}}>401 186 923</td>
      </tr>
      <tr>
      <td>&nbsp; Inntekt fra gebyrer</td>
      <td style={{textAlign: "center"}}>1</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td>&nbsp; Inntekt fra tilskudd og overf&oslash;ringer</td>
      <td style={{textAlign: "center"}}>1</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td>&nbsp; Salgs- og leieinntekter</td>
      <td style={{textAlign: "center"}}>1</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>52 939 876</td>
      <td style={{textAlign: "right"}}>55 943 684</td>
      </tr>
      <tr>
      <td>&nbsp; Gevinst ved avgang av anleggsmidler</td>
      <td style={{textAlign: "center"}}>1</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>71 149</td>
      <td style={{textAlign: "right"}}>6 988</td>
      </tr>
      <tr>
      <td>&nbsp; Andre driftsinntekter</td>
      <td style={{textAlign: "center"}}>1</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td><em>Sum driftsinntekter</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>460 843 617</em></td>
      <td style={{textAlign: "right"}}><em>457 137 595</em></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td><strong>Driftskostnader</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td>&nbsp; L&oslash;nn og sosiale kostnader</td>
      <td style={{textAlign: "center"}}>2</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>280 304 396</td>
      <td style={{textAlign: "right"}}>266 445 129</td>
      </tr>
      <tr>
      <td>&nbsp; Varekostnader</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td>&nbsp; Andre driftskostnader</td>
      <td style={{textAlign: "center"}}>3</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>140 282 143</td>
      <td style={{textAlign: "right"}}>162 086 457</td>
      </tr>
      <tr>
      <td>&nbsp; Avskrivninger&nbsp;</td>
      <td style={{textAlign: "center"}}>4,5</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>35 249 029</td>
      <td style={{textAlign: "right"}}>31 872 023</td>
      </tr>
      <tr>
      <td>&nbsp; Nedskrivninger</td>
      <td style={{textAlign: "center"}}>4,5</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td><em>Sum driftskostnader</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>455 835 568</em></td>
      <td style={{textAlign: "right"}}><em>460 403 609</em></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <th>Driftsresultat</th>
      <th style={{textAlign: "center"}}>&nbsp;</th>
      <th style={{textAlign: "right", backgroundColor: "#efefef"}}>5 008 049</th>
      <th style={{textAlign: "right"}}>-3 266 014</th>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td><strong>Finansinntekter og finanskostnader</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td>&nbsp; Finansinntekter</td>
      <td style={{textAlign: "center"}}>6</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>3 658</td>
      <td style={{textAlign: "right"}}>2 089</td>
      </tr>
      <tr>
      <td>&nbsp; Finanskostnader</td>
      <td style={{textAlign: "center"}}>6</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>603 184</td>
      <td style={{textAlign: "right"}}>17 696</td>
      </tr>
      <tr>
      <td><em>Sum finansinntekter og finanskostnader</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>-599 526</em></td>
      <td style={{textAlign: "right"}}><em>-15 608</em></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td><strong>Inntekter fra eierandeler i selskaper mv.</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td>&nbsp; Utbytte fra selskaper mv.</td>
      <td style={{textAlign: "center"}}>6</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td><em>Sum inntekter fra eierandeler i selskaper mv.</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>0</em></td>
      <td style={{textAlign: "right"}}><em>0</em></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <th>Resultat av periodens aktiviteter</th>
      <th style={{textAlign: "center"}}>&nbsp;</th>
      <th style={{textAlign: "right", backgroundColor: "#efefef"}}>4 408 523</th>
      <th style={{textAlign: "right"}}>-3 281 621</th>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td><strong>Avregninger</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td>&nbsp; Avregning med statskassen (bruttobudsjetterte)</td>
      <td style={{textAlign: "center"}}>7</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>-4 408 523</td>
      <td style={{textAlign: "right"}}>3 281 621</td>
      </tr>
      <tr>
      <td><em>Sum avregninger</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>-4 408 523</em></td>
      <td style={{textAlign: "right"}}><em>3 281 621</em></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td><strong>Periodens resultat</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><strong>0</strong></td>
      <td style={{textAlign: "right"}}><strong>0</strong></td>
      </tr>
      <tr>
      <td><em>Disponeringer</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>0</em></td>
      <td style={{textAlign: "right"}}><em>0</em></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td><strong>Innkrevingsvirksomhet og andre overf&oslash;ringer til staten</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td>&nbsp; Inntekter av avgifter og gebyrer direkte til statskassen</td>
      <td style={{textAlign: "center"}}>9</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td>&nbsp; Avregning med statskassen innkrevingsvirksomhet</td>
      <td style={{textAlign: "center"}}>9</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td><em>Sum innkrevingsvirksomhet og andre overf&oslash;ringer til staten</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>0</em></td>
      <td style={{textAlign: "right"}}><em>0</em></td>
      </tr>
      <tr>
      <td>&nbsp;</td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td><strong>Tilskuddsforvaltning og andre overf&oslash;ringer fra staten</strong></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>&nbsp;</td>
      <td style={{textAlign: "right"}}>&nbsp;</td>
      </tr>
      <tr>
      <td>&nbsp; Utbetalinger av tilskudd til andre</td>
      <td style={{textAlign: "center"}}>10</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td>&nbsp; Avregning med statskassen tilskuddsforvaltning</td>
      <td style={{textAlign: "center"}}>10</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}>0</td>
      <td style={{textAlign: "right"}}>0</td>
      </tr>
      <tr>
      <td><em>Sum tilskuddsforvaltning og andre overf&oslash;ringer fra staten</em></td>
      <td style={{textAlign: "center"}}>&nbsp;</td>
      <td style={{textAlign: "right", backgroundColor: "#efefef"}}><em>0</em></td>
      <td style={{textAlign: "right"}}><em>0</em></td>
      </tr>
      </tbody>
      </table>

      <br/><br/>

      <table className="table">
        <caption>Tabell med en celle som er slått sammen vertikalt.</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{textAlign: "right"}}>Age</th>
            <th style={{textAlign: "right"}}>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td style={{textAlign: "right"}} rowSpan="2">30,5</td>
            <td style={{textAlign: "right"}}>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td style={{textAlign: "right"}}>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td style={{textAlign: "right"}}>25,0</td>
            <td style={{textAlign: "right"}}>175</td>
          </tr>
        </tbody>
      </table>

      <br/><br/>

      <table className="table table--striped">
        <caption>Stripet tabell med en celle som er slått sammen vertikalt.</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{textAlign: "right"}}>Age</th>
            <th style={{textAlign: "right"}}>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td style={{textAlign: "right"}} rowSpan="2">30,5</td>
            <td style={{textAlign: "right"}}>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td style={{textAlign: "right"}}>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td style={{textAlign: "right"}}>25,0</td>
            <td style={{textAlign: "right"}}>175</td>
          </tr>
        </tbody>
      </table>

      <br/><br/>

      <table className="table table--tight">
        <caption>Tabell med mindre luft og en celle som er slått sammen vertikalt.</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{textAlign: "right"}}>Age</th>
            <th style={{textAlign: "right"}}>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td style={{textAlign: "right"}} rowSpan="2">30,5</td>
            <td style={{textAlign: "right"}}>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td style={{textAlign: "right"}}>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td style={{textAlign: "right"}}>25,0</td>
            <td style={{textAlign: "right"}}>175</td>
          </tr>
        </tbody>
      </table>

      <br/><br/>

      <table className="table">
        <caption>Tabell med en celle som er slått sammen vertikalt og en bunntekst-rad med kolonnesummer.</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{textAlign: "right"}}>Age</th>
            <th style={{textAlign: "right"}}>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td style={{textAlign: "right"}} rowSpan="2">30,5</td>
            <td style={{textAlign: "right"}}>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td style={{textAlign: "right"}}>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td style={{textAlign: "right"}}>25,0</td>
            <td style={{textAlign: "right"}}>175</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>3 persons</td>
            <td>86 years</td>
            <td>517 cm</td>
          </tr>
        </tfoot>
      </table>

      <br/><br/>

      <table className="table">
        <caption>Tabell med sjekk av tallbredde, uten thead.</caption>
        <tbody>
          <tr>
            <td>20 enere</td>
            <td style={{textAlign: "right"}}>11111111111111111111</td>
          </tr>
          <tr>
            <td>20 treere</td>
            <td style={{textAlign: "right"}}>33333333333333333333</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>20 treere, fet skrift</td>
            <td style={{textAlign: "right"}}>33333333333333333333</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
