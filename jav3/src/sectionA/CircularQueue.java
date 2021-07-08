package sectionA;

import java.util.Objects;

public class CircularQueue {

	private int size;
	private int frontIndex = -1;
	private int rearIndex = -1;
	private CircularQueueElem point = null;

	public CircularQueue(int size) {
		this.size = size;
	}
	
	public int getSize() {
		return size;
	}

	private boolean isEmpty() {
		return this.frontIndex > this.rearIndex || this.frontIndex < 0;
	}

	private boolean isUsable() {
		return !(this.rearIndex == this.size - 1 && this.frontIndex > this.rearIndex);
	}
	
	public int getFront() {
		if(!this.isUsable()) {
			System.out.println("Circular queue not usable anymore");
			return -1;
		}
		if(this.isEmpty()) {
			System.out.println("Circular queue is empty");
		}
		if(Objects.isNull(this.point)) return -1;
		CircularQueueElem first = this.point.getNext();
		return first.getValue();
	}
	
	public int getRear() {
		if(!this.isUsable()) {
			System.out.println("Circular queue not usable anymore");
			return -1;
		}
		if(this.isEmpty()) {
			System.out.println("Circular queue is empty");
			return -1;
		}
		return this.point.getValue();
	}
	
	public CircularQueue enQueue(int value) {
		if(this.frontIndex < 0) ++this.frontIndex;
		if(this.rearIndex == this.size-1) {
			System.out.println("No space to store");
			return this;
		}
		++this.rearIndex;
		CircularQueueElem point = new CircularQueueElem(value);
		if(Objects.nonNull(this.point)) {
			point.setNext(this.point.getNext());
			this.point.setNext(point);
		}
		this.point = point;
		return this;
	}
	
	public int deQueue() {
		if(this.isEmpty()) {
			System.out.println("Circular queue is empty");
			return -1;
		}
		int value = this.getFront();
		++this.frontIndex;
		if(this.isEmpty()) {
			this.point = null;
		} else {
			CircularQueueElem first = this.point.getNext();
			this.point.setNext(first.getNext());
		}
		return value;
	}

}

class CircularQueueElem {
	
	private int value;
	private CircularQueueElem next = this;

	CircularQueueElem(int value){
		this.value = value;
	}

	public int getValue() {
		return value;
	}

	public CircularQueueElem getNext() {
		return next;
	}

	public void setNext(CircularQueueElem next) {
		this.next = next;
	}
	
	
}
