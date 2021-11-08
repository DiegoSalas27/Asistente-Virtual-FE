<script lang="ts">
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";
  import type {
    IActionGrid,
    IDataSource,
  } from "../../common/interfaces/grid.interface";

  // core components

  export let actions: IActionGrid[];
  export let index: number;
  export let dataSource: IDataSource<any>;

  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;

  const toggleDropdown = () => {
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };
</script>

<div>
  <a
    class="text-blueGray-500 py-1 px-3"
    href="#pablo"
    bind:this={btnDropdownRef}
    on:click|preventDefault={toggleDropdown}
  >
    <i class="fas fa-ellipsis-v" />
  </a>
  <div
    bind:this={popoverDropdownRef}
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
      ? 'block'
      : 'hidden'}"
  >
    {#each actions as action (action.type)}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        on:click={() => {
          toggleDropdown();
          action.method(
            dataSource.listaRecords[index]
          );
        }}
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        {action.type}
      </a>
    {/each}
    <!-- <a
      href="#pablo" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Action
    </a>
    <a
      href="#pablo" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Another action
    </a>
    <a
      href="#pablo" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Something else here
    </a> -->
  </div>
</div>
