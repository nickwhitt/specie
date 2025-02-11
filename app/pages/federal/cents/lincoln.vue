<template>
  <article>
    <UBreadcrumb :items="[
      { label: 'Federal Types', to: '/federal' },
      { label: 'Cents', to: '/federal/cents' },
      { label: 'Lincoln Cents' },
    ]" />

    <TypeDetail title="Wheat Ears Reverse (1909-1958)" :images="[
      '/cents/lincoln-wheat-obv.webp',
      '/cents/lincoln-wheat-rev.webp',
    ]" />

    <TypeDetail title="Memorial Reverse (1959-2008)" :images="[]" />

    <TypeDetail title="Bicentennial Reverses (2009)" :images="[
      '/cents/lincoln-birth-rev.webp',
      '/cents/lincoln-youth-rev.webp',
      '/cents/lincoln-professional-rev.webp',
      '/cents/lincoln-presidency-rev.webp',
    ]" />

    <TypeDetail title="Union Shield Reverse (2010 to date)" :images="[
      '/cents/lincoln-shield-obv.webp',
      '/cents/lincoln-shield-rev.webp',
    ]" />
  </article>
</template>
