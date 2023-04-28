<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/table">Table</router-link> |
  </nav> -->
  <div className="App">
    <nav className="App__Container">
      <router-link className="App__Link" to="/">Home</router-link>
      <router-link className="App__Link" to="/table">Table</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.App {
  padding: 2rem;

  &__Container {
    max-width: 60rem;
    margin: auto;
    display: flex;
    // padding: 2rem;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &__Link {
    // background-color: red;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    color: black;

    &:not(:first-child) {
      border-top: 1px solid #CCC;
    }

    &:hover {
      background-color: #CCC;
    }
  }
}

</style>
