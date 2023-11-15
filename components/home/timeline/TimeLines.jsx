'use client';
import React from 'react';
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import Link from 'next/link';
function TimeLines() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time></Timeline.Time>
          <Timeline.Title>Hubungi Kami</Timeline.Title>
          <Timeline.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus labore provident optio molestias excepturi porro assumenda error facilis accusamus!.
          </Timeline.Body>
          <Link href="https://wa.link/tdbsvz">
            <Button color="gray">
              Hubungi Kami
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time></Timeline.Time>
          <Timeline.Title>Jadwalkan Penjemputan</Timeline.Title>
          <Timeline.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis inventore maxime adipisci, praesentium iste eligendi. Quo voluptates reiciendis sed suscipit!
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time></Timeline.Time>
          <Timeline.Title>Driver Akan Segera Menjeput</Timeline.Title>
          <Timeline.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, eveniet! Sunt eaque quod laborum est.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export default TimeLines;