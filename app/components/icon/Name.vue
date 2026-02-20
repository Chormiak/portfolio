<template>
  <div class="icon">
    <pre class="name">
 _       ___ _____               
| |     / (_) / (_)___ _____ ___ 
| | /| / / / / / / __ `/ __ `__ \
| |/ |/ / / / / / /_/ / / / / / /
|__/|__/_/_/_/_/\__,_/_/ /_/ /_/ 
      </pre
    >
    <pre class="lastname">
     ________                         _       __  
    / ____/ /_  ____  _________ ___  (_)___ _/ /__
   / /   / __ \/ __ \/ ___/ __ `__ \/ / __ `/ //_/
  / /___/ / / / /_/ / /  / / / / / / / /_/ / ,<   
  \____/_/ /_/\____/_/  /_/ /_/ /_/_/\__,_/_/|_|  
      </pre
    >
  </div>
  
</template>
<style scoped>
.icon {
  display: flex;
}

@media (max-width: 1300px) {
  .icon .lastname {
    display: none;
  }
}
@media (max-width: 900px) {
  .icon .lastname {
    display: block;
  }
}
@media (max-width: 800px) {
  .icon .lastname {
    display: none;
  }
}
@media (max-width: 350px) {
  .icon .name {
    display: none;
  }
}

</style>