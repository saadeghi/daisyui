<template>
  <div>
    <ClassTable v-bind:data="{
      components : [
        { class: 'table', desc: 'For <table> element' },
      ],
      utilities : [
        { class: 'table-zebra', desc: 'For the active tab' },
        { class: 'table-compact', desc: 'Make table more compact' },
        { class: 'active', desc: 'For <tr> to highlight current row' },
        { class: 'hover', desc: 'For <tr> to highlight current row on hover' },
      ]
    }"/>

    <Wrapper title="table">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData.slice(0, 4)" :key="`item-${index}`">
              <th>{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.job }}</td>
              <td>{{ item.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>


    <Wrapper title="table with active row">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData.slice(4, 8)" :key="`item-${index}`" v-bind:class="{'active': index == 2}">
              <th>{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.job }}</td>
              <td>{{ item.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>

    <Wrapper title="table with hover row">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData.slice(4, 8)" :key="`item-${index}`" v-bind:class="{'hover': index == 2}">
              <th>{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.job }}</td>
              <td>{{ item.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>

    <Wrapper title="table-zebra">
      <div class="overflow-x-auto">
        <table class="table w-full table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData.slice(8, 12)" :key="`item-${index}`">
              <th>{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.job }}</td>
              <td>{{ item.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>





    <Wrapper title="table with visual elements">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData.slice(1, 5)" :key="`item-${index}`">
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img :src="'/tailwind-css-component-profile-'+ item.id +'@56w.png'" alt="Avatar Tailwind CSS Component">
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">
                      {{ item.name }}
                    </div>
                    <div class="text-sm opacity-50">
                      {{ item.location }}
                    </div>
                  </div>
                </div>
              </td>
              <td>
              {{ item.company }}
              <br>
              <span class="badge badge-outline badge-sm">{{ item.job }}</span></td>
              <td>{{ item.color }}</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Wrapper>




    <Wrapper title="table-compact">
      <div class="overflow-x-auto">
        <table class="table w-full table-compact">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData.slice(0, 20)" :key="`item-${index}`">
              <th>{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.job }}</td>
              <td>{{ item.company }}</td>
              <td>{{ item.location }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.color }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Wrapper>



  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {"id":1,"name":"Cy Ganderton","location":"Canada","job":"Quality Control Specialist","company":"Littel, Schaden and Vandervort","date":"12/16/2020","color":"Blue"},
        {"id":2,"name":"Hart Hagerty","location":"United States","job":"Desktop Support Technician","company":"Zemlak, Daniel and Leannon","date":"12/5/2020","color":"Purple"},
        {"id":3,"name":"Brice Swyre","location":"China","job":"Tax Accountant","company":"Carroll Group","date":"8/15/2020","color":"Red"},
        {"id":4,"name":"Marjy Ferencz","location":"Russia","job":"Office Assistant I","company":"Rowe-Schoen","date":"3/25/2021","color":"Crimson"},
        {"id":5,"name":"Yancy Tear","location":"Brazil","job":"Community Outreach Specialist","company":"Wyman-Ledner","date":"5/22/2020","color":"Indigo"},
        {"id":6,"name":"Irma Vasilik","location":"Venezuela","job":"Editor","company":"Wiza, Bins and Emard","date":"12/8/2020","color":"Purple"},
        {"id":7,"name":"Meghann Durtnal","location":"Philippines","job":"Staff Accountant IV","company":"Schuster-Schimmel","date":"2/17/2021","color":"Yellow"},
        {"id":8,"name":"Sammy Seston","location":"Indonesia","job":"Accountant I","company":"O'Hara, Welch and Keebler","date":"5/23/2020","color":"Crimson"},
        {"id":9,"name":"Lesya Tinham","location":"Philippines","job":"Safety Technician IV","company":"Turner-Kuhlman","date":"2/21/2021","color":"Maroon"},
        {"id":10,"name":"Zaneta Tewkesbury","location":"Chad","job":"VP Marketing","company":"Sauer LLC","date":"6/23/2020","color":"Green"},
        {"id":11,"name":"Andy Tipple","location":"Poland","job":"Librarian","company":"Hilpert Group","date":"7/9/2020","color":"Indigo"},
        {"id":12,"name":"Sophi Biles","location":"Indonesia","job":"Recruiting Manager","company":"Gutmann Inc","date":"2/12/2021","color":"Maroon"},
        {"id":13,"name":"Florida Garces","location":"Poland","job":"Web Developer IV","company":"Gaylord, Pacocha and Baumbach","date":"5/31/2020","color":"Purple"},
        {"id":14,"name":"Maribeth Popping","location":"Portugal","job":"Analyst Programmer","company":"Deckow-Pouros","date":"4/27/2021","color":"Aquamarine"},
        {"id":15,"name":"Moritz Dryburgh","location":"Sri Lanka","job":"Dental Hygienist","company":"Schiller, Cole and Hackett","date":"8/8/2020","color":"Crimson"},
        {"id":16,"name":"Reid Semiras","location":"Poland","job":"Teacher","company":"Sporer, Sipes and Rogahn","date":"7/30/2020","color":"Green"},
        {"id":17,"name":"Alec Lethby","location":"China","job":"Teacher","company":"Reichel, Glover and Hamill","date":"2/28/2021","color":"Khaki"},
        {"id":18,"name":"Aland Wilber","location":"Czech Republic","job":"Quality Control Specialist","company":"Kshlerin, Rogahn and Swaniawski","date":"9/29/2020","color":"Purple"},
        {"id":19,"name":"Teddie Duerden","location":"France","job":"Staff Accountant III","company":"Pouros, Ullrich and Windler","date":"10/27/2020","color":"Aquamarine"},
        {"id":20,"name":"Lorelei Blackstone","location":"Kazakhstan","job":"Data Coordiator","company":"Witting, Kutch and Greenfelder","date":"6/3/2020","color":"Red"}
      ],
    }
  },
  head() {
    return {
      title: "daisyUI — Tailwind CSS table component",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tailwind CSS table component - Tailwind CSS table examples'
        }
      ]
    }
  }
}
</script>
