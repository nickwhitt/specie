<template>
  <article>
    <ProseH1>Quarter Dollars</ProseH1>

    <TypeList :types="types" />

    <TypeDetail title="Draped Bust Quarter" slug="draped-bust" :images="[
      '/quarters/draped-bust-obv.webp',
      '/quarters/draped-bust-rev.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Capped Bust Quarter" slug="capped-bust" :images="[
      '/quarters/capped-bust-obv.webp',
      '/quarters/capped-bust-rev.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Liberty Seated Quarter" slug="liberty-seated" :images="[
      '/quarters/liberty-seated-obv.webp',
      '/quarters/liberty-seated-rev.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Barber Quarter" slug="barber" :images="[
      '/quarters/barber-obv.webp',
      '/quarters/barber-rev.webp',
    ]">
      <ProseP>
        The classic turn-of-the-century Barber quarter features Liberty in a Phrygian cap and laurel wreath, with a
        Heraldic Eagle on the reverse. Designed by Charles E. Barber, these 90% silver quarters were issued from
        1892-1916 and had low mintages, which makes them difficult to find today.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Standing Liberty Quarter" slug="standing-liberty" :images="[
      '/quarters/standing-liberty-obv.webp',
      '/quarters/standing-liberty-rev.webp',
    ]">
      <ProseP>
        Struck in 90% silver, Standing Liberty quarters are from the era of flapper girls, the Charleston and
        speakeasies. Designed by Hermon A. MacNeil, they feature the full figure of Liberty standing on the obverse and
        an American eagle in flight on the reverse.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Washington Quarter" slug="washington" :images="[
      '/quarters/washington-obv.webp',
      '/quarters/washington-rev.webp',
      '/quarters/washington-bicentennial-obv.webp',
      '/quarters/washington-bicentennial-rev.webp',
    ]">
      <ProseP>
        First struck in 1932 and designed by John Flanagan, the Washington quarter was struck in 90%
        silver until 1964. Since 1965, it has been struck as a cupronickel outer layer clad to a core
        of pure copper. For America's Bicentennial, it was given a special Colonial Drummer reverse
        and dual-dated 1776-1976.
      </ProseP>
    </TypeDetail>

    <TypeDetail :images="[
      '/quarters/washington-state-obv.webp',
      '/quarters/washington-state-rev-maine.webp',
    ]">
      <template #title>
        <ProseH3 id="washington-states">50 State Quarters</ProseH3>
      </template>
      <ProseP>
        The Statehood Quarters Program honoring each of the 50 United States began in 1999 and ended in 2008. The
        quarters were released at the rate of 5 coins per year in the order each state joined the Union and were struck
        for about 10 weeks only. Each bears a modified Washington obverse with an individual Statehood reverse design.
        Then, in 2009, six new quarters were released commemorating the District of Columbia and the 5 U.S. Territories
        on the reverses. The Washington obverse remained the same as the Statehood quarter design.
      </ProseP>
    </TypeDetail>

    <TypeDetail :images="[
      '/quarters/washington-atb-obv.webp',
      '/quarters/washington-atb-rev-voyageurs.webp',
    ]">
      <template #title>
        <ProseH3 id="washington-atb">America the Beautiful</ProseH3>
      </template>
      <ProseP>
        From 2010-2021, the America's National Park Quarter Series honored a national park or historic site in each of
        the 50 states, D.C. and the 5 U.S. Territories. Five special reverse designs were issued each year, in about
        ten-week intervals, in the order that the sites were established as federally protected areas. A restored
        version of the original 1932 Washington quarter portrait appeared on the obverse of each issue.
      </ProseP>
    </TypeDetail>

    <TypeDetail :images="[
      '/quarters/washington-crossing-delaware-obv.webp',
      '/quarters/washington-crossing-delaware-rev.webp',
    ]">
      <template #title>
        <ProseH3 id="washington-crossing-delaware">Washington Crossing the Delaware</ProseH3>
      </template>
      <ProseP>
        A single-year commemorative coin was issued for 2021 with a reverse image of General Washington's covert
        crossing of the Delaware River for a surprise attack at the Battle of Trenton. This intermediary coin between
        America the Beautiful and American Women quarter dollar series was designed by Benjamin Sowards, with John
        Flanagan's original obverse design.
      </ProseP>
    </TypeDetail>

    <TypeDetail :images="[
      '/quarters/washington-awq-obv.webp',
      '/quarters/washington-awq-rev-vera-rubin.webp',
    ]">
      <template #title>
        <ProseH3 id="washington-awq">American Women</ProseH3>
      </template>
      <ProseP>
        This 4-year series honors the accomplishments and contributions of American women. Five new reverse designs will
        be issued each year 2022-2025, with a new common obverse by noted sculptor Laura Gardin Fraser.
      </ProseP>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Draped Bust', slug: '#draped-bust', dates: '1796-1807', designers: ['Gilbert Stuart', 'Robert Scot'], image: '/quarters/draped-bust-obv.webp' },
  { type: 'Capped Bust', slug: '#capped-bust', dates: '1815-1838', designers: ['John Reich', 'William Kneass'], image: '/quarters/capped-bust-obv.webp' },
  { type: 'Liberty Seated', slug: '#liberty-seated', dates: '1838-1891', designers: ['Christian Gobrecht'], image: '/quarters/liberty-seated-obv.webp' },
  { type: 'Barber', slug: '#barber', dates: '1892-1916', designers: ['Charles E. Barber'], image: '/quarters/barber-obv.webp', owned: true },
  { type: 'Standing Liberty', slug: '#standing-liberty', dates: '1916-1930', designers: ['Hermon A. MacNeil'], image: '/quarters/standing-liberty-obv.webp', owned: true },
  { type: 'Washington', slug: '#washington', dates: '1930-date', designers: ['John Flanagan', 'William Cousins', 'Laura Gardin Fraser'], image: '/quarters/washington-obv.webp', owned: true },
]
</script>
