import React from 'react'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils'
import {List, Map} from 'immutable'
import Results from '../../src/components/Results'
import {expect} from 'chai'

describe('Results', () => {

  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Export', 'Import')
    const tally = Map({'Export': 5})
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    );
    
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
    const [exportEntry, importEntry] = entries.map(e => e.textContent)

    expect(entries.length).to.equal(2);
    expect(exportEntry).to.contain('Export')
    expect(exportEntry).to.contain('5')
    expect(importEntry).to.contain('Import')
    expect(importEntry).to.contain('0')
  })

})
