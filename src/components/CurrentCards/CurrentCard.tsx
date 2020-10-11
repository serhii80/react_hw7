import React from 'react';
import styles from './CurrentCard.module.scss'

interface CardProps {
    currentListId: string;
    cards: Record<string, any>[];
}

export class CurrentCards extends React.Component<CardProps> {

    private renderOneCard(cards: any, listId: String) {
        return cards.map((card: any, i: any) => {
            if (card.idList === listId) {
                return <div key={i} className={styles.card}>{card.name}</div>
            }
            return null
        })
    }

    public render() {
        if (!this.props.cards || !this.props.currentListId) {
            return (<div>Data is loading...</div>)
        }
        return this.renderOneCard(this.props.cards, this.props.currentListId)
    }
}