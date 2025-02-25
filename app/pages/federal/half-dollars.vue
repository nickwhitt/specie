<template>
  <article>
    <ProseH1>Half Dollars</ProseH1>

    <TypeList :types="types" />

    <TypeDetail title="Flowing Hair Half Dollar" slug="flowing-hair" :images="[
      '/half-dollars/flowing-hair-obv.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Draped Bust Half Dollar" slug="draped-bust" :images="[
      '/half-dollars/draped-bust-obv.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Capped Bust Half Dollar" slug="capped-bust" :images="[
      '/half-dollars/capped-bust-obv.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Liberty Seated Half Dollar" slug="liberty-seated" :images="[
      '/half-dollars/liberty-seated-obv.webp',
    ]">
      <ProseP>
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Barber Half Dollar" slug="barber" :images="[
      '/half-dollars/barber-obv.webp',
    ]">
      <ProseP>
        Issued at the turn of the 20th century, the classic Barber half dollar features Liberty in a Phrygian cap and
        laurel wreath. A Heraldic Eagle graces the reverse. Designed by Charles E. Barber, these 90% silver half dollars
        were issued from 1892-1915 and had low mintages.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Liberty Walking Half Dollar" slug="liberty-walking" :images="[
      '/half-dollars/liberty-walking-obv.webp',
    ]">
      <ProseP>
        Considered by some as America's most beautiful silver coin, the Liberty Walking half dollar was minted from
        1916-1947. Designed by Adolph A. Weinman, this 90% silver coin shows Liberty striding toward the dawn of a new
        day. An eagle on a crag is on the reverse.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Franklin Half Dollar" slug="franklin" :images="[
      '/half-dollars/franklin-obv.webp',
    ]">
      <ProseP>
        Struck in 90% silver and issued from 1948-1963, this half dollar shows Benjamin Franklin on the obverse and the
        Liberty Bell on the reverse. Honoring a revered Founding Father, this was the first circulating U.S. coin to
        depict a non-president.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Kennedy Half Dollar" slug="kennedy" :images="[
      '/half-dollars/kennedy-obv.webp',
    ]">
      <ProseP>
        First issued in 1964, this half dollar honors President John F. Kennedy, assassinated only months before. The
        obverse was based on Gilroy Robers' inagural medal, using suggestions by Jackie Kennedy, the president's widow.
        The reverse bears an adaptation of the Presidential Seal by Frank Gasparro. Regular-issue coins were struck in
        90% silver in 1964, those from 1965-1970 in silver-clad, and in cupronickel-clad since 1971. During the
        Bicentennial, dual dates 1776-1976 appeared on the obverse and a view of Independence Hall by Seth Huntiongton
        was featured on the reverse.
      </ProseP>
    </TypeDetail>
  </article>
</template>

<script setup lang="ts">
import type { CoinType } from '~/components/TypeList.vue'

const types = ref<CoinType[]>([
  { type: 'Flowing Hair', slug: '#flowing-hair', dates: '1794-1795', designers: ['Robert Scot'], image: '/half-dollars/flowing-hair-obv.webp' },
  { type: 'Draped Bust', slug: '#draped-bust', dates: '1796-1807', designers: ['Robert Scot'], image: '/half-dollars/draped-bust-obv.webp' },
  { type: 'Capped Bust', slug: '#capped-bust', dates: '1807-1839', designers: ['John Reich', 'Christian Gobrecht'], image: '/half-dollars/capped-bust-obv.webp' },
  { type: 'Liberty Seated', slug: '#liberty-seated', dates: '1839-1891', designers: ['Christian Gobrecht', 'James B. Longacre'], image: '/half-dollars/liberty-seated-obv.webp' },
  { type: 'Barber', slug: '#barber', dates: '1892-1915', designers: ['Charles E. Barber'], image: '/half-dollars/barber-obv.webp' },
  { type: 'Liberty Walking', slug: '#liberty-walking', dates: '1916-1947', designers: ['Adolph A. Weinman'], image: '/half-dollars/liberty-walking-obv.webp', owned: true },
  { type: 'Franklin', slug: '#franklin', dates: '1948-1963', designers: ['John R. Sinnock'], image: '/half-dollars/franklin-obv.webp', owned: true },
  { type: 'Kennedy', slug: '#kennedy', dates: '1964-date', designers: ['Gilroy Roberts', 'Frank Gasparro', 'Seth Huntington'], image: '/half-dollars/kennedy-obv.webp', owned: true },
])
</script>
