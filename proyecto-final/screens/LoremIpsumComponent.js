import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const LoremIpsumComponent = () => {
  // Texto Lorem Ipsum largo
  const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit lacinia tellus, sit amet consectetur ligula tincidunt et. Vestibulum bibendum tempus turpis, ut pellentesque libero sodales et. Ut in ipsum non ligula elementum pharetra. Fusce faucibus sit amet augue id volutpat. Curabitur commodo libero et ipsum malesuada convallis. Maecenas sed tincidunt orci. Sed condimentum bibendum quam vel tempor. Curabitur feugiat justo in nisi accumsan, vel tincidunt arcu gravida. Nam efficitur magna vitae bibendum accumsan. Duis ullamcorper justo eget lorem rhoncus, non pellentesque nisl congue. Vestibulum lobortis lectus ac bibendum iaculis. Donec nec venenatis lectus. Nulla quis justo purus.

  Phasellus volutpat neque nec risus faucibus consectetur. Fusce hendrerit, libero non suscipit faucibus, risus dui elementum nunc, a auctor felis elit id est. Nullam nec sem et ante placerat consectetur et vitae magna. Aenean interdum dolor eget dui consectetur, vitae mollis libero sollicitudin. Nam pretium consequat nisl, nec facilisis neque ullamcorper sed. Curabitur eget metus sit amet metus tristique tempor. Vestibulum auctor dui vitae lorem suscipit fermentum. Aliquam sed bibendum ante, non lobortis ipsum. Nam non urna at sapien pellentesque eleifend in eget magna. Duis placerat justo a tellus volutpat, et vulputate ligula scelerisque. Nam auctor enim elit, et facilisis nunc vestibulum vitae. Curabitur eleifend mi sit amet orci placerat, et fringilla mi fermentum. Donec vel urna nec magna dapibus viverra. In maximus libero nec cursus faucibus. Nam sed odio et nisi fermentum malesuada. Duis efficitur ultricies consectetur.

  Etiam vestibulum neque a libero efficitur, ut consequat leo consequat. Suspendisse potenti. Nullam sodales massa at purus convallis venenatis. Ut at convallis nisi. Curabitur suscipit dapibus nulla, eu laoreet odio condimentum at. Vivamus congue quam eget fermentum suscipit. Curabitur blandit lacinia semper. Vestibulum tristique luctus sapien vel convallis. Donec ut odio sit amet leo pharetra viverra id ac orci. Fusce nec mauris et tortor bibendum luctus. Mauris suscipit mauris et suscipit faucibus. Nam bibendum diam eu leo efficitur, et egestas eros vestibulum. Curabitur ac efficitur magna. Cras dictum enim velit, ut fringilla libero vestibulum nec.`;

  return (
    // <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{color:"white", fontSize: 18}}>Lorem Ipsum</Text>
        <Text style={{color:"black", fontSize: 18}}>{loremIpsumText}</Text>
      </View>
    // </ScrollView>
  );
};

export default LoremIpsumComponent;
