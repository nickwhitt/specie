<template>
  <article>
    <ProseH1>Dimes</ProseH1>

    <TypeList :types="types" />

    <TypeDetail title="Draped Bust Dime" slug="draped-bust" :images="[
      '/dimes/draped-bust-obv.webp',
      '/dimes/draped-bust-rev.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Capped Bust Dime" slug="capped-bust" :images="[
      '/dimes/capped-bust-obv.webp',
      '/dimes/capped-bust-rev.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Liberty Seated Dime" slug="liberty-seated" :images="[
      '/dimes/liberty-seated-obv.webp',
      '/dimes/liberty-seated-rev.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Barber Dime" slug="barber" :images="[
      '/dimes/barber-obv.webp',
      '/dimes/barber-rev.webp',
    ]">
      <ProseP>
        With the classic Liberty Head in a Phrygian cap and laurel wreath, this 90% silver coin is named for
        its designer, Charles E. Barber. The Barber dime was issued from 1892-1916 and had much lower mintage
        compared to production figures for modern coinage.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Winged Liberty or Mercury Dime" slug="mercury" :images="[
      '/dimes/mercury-obv.webp',
      '/dimes/mercury-rev.webp',
    ]">
      <ProseP>
        When designer Adolph Weinman put wings on Liberty's cap to symbolize freedom of thought, the public mistook
        Liberty for the Roman messenger god Mercury, and the 90% silver coins became known as Mercury dimes. Struck from
        1916-1945, these silver dimes endured through two world wars.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Roosevelt Dime" slug="roosevelt" :images="[
      '/dimes/roosevelt-obv.webp',
      '/dimes/roosevelt-rev.webp',
    ]">
      <ProseP>
        The Roosevelt dime of 1946-date honors Franklin D. Roosevelt, our only four-term president. He led the nation
        through the Great Depression and WWII, following the principle set forth in his first inaugural address: "The
        only thing we have to fear is fear itself." FDR died in April 1945, and his likeness was placed on the dime
        beginning in 1946. Roosevelt dimes were struck in 90% silver through 1964, then in cupronickel-clad due to the
        rising cost of silver.
      </ProseP>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue';

const types: CoinType[] = [
  { type: 'Draped Bust', slug: '#draped-bust', dates: '1796-1807', designers: ['Gilbert Stuart'], image: '/dimes/draped-bust-obv.webp' },
  { type: 'Capped Bust', slug: '#capped-bust', dates: '1809-1837', designers: ['John Reich'], image: '/dimes/capped-bust-obv.webp' },
  { type: 'Liberty Seated', slug: '#liberty-seated', dates: '1837-1891', designers: ['Christian Gobrecht'], image: '/dimes/liberty-seated-obv.webp' },
  { type: 'Barber', slug: '#barber', dates: '1892-1916', designers: ['Charles E. Barber'], image: '/dimes/barber-obv.webp', owned: true },
  { type: 'Mercury', slug: '#mercury', dates: '1916-1945', designers: ['Adolph A. Weinman'], image: '/dimes/mercury-obv.webp', owned: true },
  { type: 'Roosevelt', slug: '#roosevelt', dates: '1946-date', designers: ['John R. Sinnock'], image: '/dimes/roosevelt-obv.webp', owned: true },
]
</script>
