<template>
  <article>
    <UBreadcrumb :items="[
      { label: 'Federal Types', to: '/federal' },
      { label: 'Cents', to: '/federal/cents' },
      { label: 'Flowing Hair Cents' }
    ]" />

    <ProseH1>Flowing Hair Cents</ProseH1>

    <TypeDetail title="Chain Reverse (1793)" slug="chain" :images="[
      '/cents/flowing-hair-chain-obv.webp',
      '/cents/flowing-hair-chain-rev.webp',
    ]">
      <ProseP>
        The reverse features a chain of 15 links representing the United States surrounding the
        legend ONE CENT above the fraction 1/100. The first of several varieties, Sheldon-1,
        has an abreviated legend UNITED STATES OF AMERI. outside the links; later versions have
        the full AMERICA.
      </ProseP>
    </TypeDetail>

    <TypeDetail title="Wreath Reverse (1793)" slug="wreath" :images="[
      '/cents/flowing-hair-wreath-obv.webp',
      '/cents/flowing-hair-wreath-rev.webp',
    ]">
      <ProseP>
        A modified design featuring a high-relief portrait of Liberty on the obverse, and a laurel
        wreath replacing the chains on the reverse. The fraction 1/100 was moved outside and below
        the wreath, and the legend UNITED STATES OF AMERICA was proportionally centered around a
        beaded border.
      </ProseP>
    </TypeDetail>
  </article>
</template>
