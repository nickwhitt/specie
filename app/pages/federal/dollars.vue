<template>
  <article>
    <ProseH1>Dollars</ProseH1>

    <TypeList :types="types" />

    <TypeDetail title="Flowing Hair Dollar" slug="flowing-hair" :images="[]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Draped Bust Dollar" slug="draped-bust" :images="[]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Liberty Seated Dollar" slug="liberty-seated" :images="[]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Trade Dollar" slug="trade" :images="[]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Morgan Dollar" slug="morgan" :images="[]">
      <ProseP>
        Designed and named after George T. Morgan, these 90% silver dollars were issued from 1878-1904 and then again in
        1921.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Peace Dollar" slug="peace" :images="[]">
      <ProseP>
        Designed by Anthony de Francisci, the classic Peace dollar, with a depiction of a youthful Liberty with
        windblown hair and wearing a spiked crown, proved to be a pleasing departure from the past. Struck from
        1921-1928 and 1934-1935, the Peace dollar was the last silver dollar series struck entirely in 90% silver.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Eisenhower Dollar" slug="eisenhower" :images="[]">
      <ProseP>
        The 1971-1978 Eisenhower dollar honors WWII hero and 34th President Dwight D. Eisenhower and the 1969 lunar
        landing. Designed by Frank Gasparro, it was struck in both cupronickel- and silver-clad.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Susan B. Anthony Dollar" slug="anthony" :images="[]">
      <ProseP>
        This cupronickel-clad coin is the first U.S. small-size dollar. Designed by Frank Gasparro, it was issued from
        1979-1981 and a final time in 1999. Susan B. Anthony, pioneer for women's rights, is on the obverse, and the
        reverse honors the 1969 lunar landing.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Sacagawea Dollar" slug="sacagawea" :images="[]">
      <ProseP>
        Introduced in 2000, the Sacagawea dollar honored the young Shoshone woman who served as a guide and interpreter
        for the famous Lewis and Clark Expedition of 1804-1806. The reverse depcits a soaring eagle. Designed by Glenna
        Goodacre, these small dollar coins are comprised of copper, zinc, manganese and nickel; and feature a
        distinctive golden color. In 2009, these coins were replaced by the Native American dollar series.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Presidential Dollar" slug="presidential" :images="[]">
      <ProseP>
        Presidential dollars honor our nation's highest-ranking officials in order of service. They were released at the
        rate of four issues per year from 2007-2015, with three coins struck in 2016. An additional design was added in
        2020 to honor George H.W. Bush.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Native American Dollar" slug="native-american" :images="[]">
      <ProseP>
        Beginning in 2009, the dollar coins depicting Sacagawea on the obverse feature annually changing reverse designs
        honoring Native American contributions.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="American Innovation Dollar" slug="innovation" :images="[]">
      <ProseP>
        The U.S. Innovation dollar series began with one 2018 introductory reverse design and continues with four new
        reverse designs each year from 2019-2032, honoring a major innovator or innovation from each of the 50 states,
        D.C. and the 5 U.S. territories. The common obverse features a dramatic new image of the Statue of Liberty.
      </ProseP>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Flowing Hair', slug: '#flowing-hair', dates: '1794-1795', designers: ['Robert Scot'] },
  { type: 'Draped Bust', slug: '#draped-bust', dates: '1795-1804', designers: ['Robert Scot'] },
  { type: 'Liberty Seated', slug: '#liberty-seated', dates: '1840-1873', designers: ['Christian Gobrecht'] },
  { type: 'Trade', slug: '#trade', dates: '1873-1885', designers: ['William Barber'] },
  { type: 'Morgan', slug: '#morgan', dates: '1878-1921', designers: ['George T. Morgan'], owned: true },
  { type: 'Peace', slug: '#peace', dates: '1921-1935', designers: ['Anthony de Francisci'], owned: true },
  { type: 'Eisenhower', slug: '#eisenhower', dates: '1971-1978', designers: ['Frank Gasparro', 'Dennis R. Williams'], owned: true },
  { type: 'Susan B. Anthony', slug: '#anthony', dates: '1979-1999', designers: ['Frank Gasparro'], owned: true },
  { type: 'Sacagawea', slug: '#sacagawea', dates: '2000-2008', designers: ['Glenna Goodacre', 'Thomas D. Rogers Sr.'], owned: true },
  { type: 'Presidential', slug: '#presidential', dates: '2007-2016', designers: ['Don Everhart'], owned: true },
  { type: 'Native American', slug: '#native-american', dates: '2009-date', designers: ['Glenna Goodacre'], owned: true },
  { type: 'American Innovation', slug: '#innovation', dates: '2018-date', designers: ['Justin Kunz'], owned: true },
]
</script>
