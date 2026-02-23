<template>
  <div class="icon">
    <p>404</p>
    <pre class="error">
        :::      :::::::      ::: 
      :+:      :+:   :+:    :+:   
    +:+ +:+   +:+   +:+   +:+ +:+ 
  +#+  +:+   +#+   +:+  +#+  +:+  
+#+#+#+#+#+ +#+   +#+ +#+#+#+#+#+ 
      #+#   #+#   #+#       #+#    
    ###    #######        ###     
    </pre>
  </div>
</template>
<style scoped>
p {
  display: none;
}
@media (max-width: 610px) {
  .icon .error {
    display: none;
  }
  p {
    display: block;
    font-weight: bold;
  }
}
</style>
